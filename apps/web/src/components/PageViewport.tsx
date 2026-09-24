'use client';

import React, { useEffect, useRef } from 'react';
import { Site } from '../types';
import { HOME } from '../hooks/useNavigation';

// Injected into every page: forwards link clicks to the browser chrome, blocks form escapes.
const INTERCEPTOR = `<script>
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    e.preventDefault();
    parent.postMessage({ type: 'MINI_BROWSER_NAVIGATE', address: a.getAttribute('href') || '' }, '*');
  }, true);
  document.addEventListener('submit', function (e) { e.preventDefault(); }, true);
</script>`;

interface PageViewportProps {
  site: Site | null;
  notFoundAddress: string | null;
  isLoading: boolean;
  onNavigate: (address: string) => void;
  onPublish: () => void;
}

export function PageViewport({ site, notFoundAddress, isLoading, onNavigate, onPublish }: PageViewportProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      // Only trust messages from our own page iframe.
      if (event.source !== iframeRef.current?.contentWindow) return;
      if (event.data?.type === 'MINI_BROWSER_NAVIGATE' && typeof event.data.address === 'string') {
        onNavigate(event.data.address);
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onNavigate]);

  // 1. Loading State
  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p style={styles.loadingText}>Fetching page from the small web...</p>
      </div>
    );
  }

  // 2. Nowhere (404) State
  if (notFoundAddress) {
    return (
      <div style={styles.errorContainer}>
        <div style={styles.errorBox}>
          <div style={styles.errorBadge}>State 05 · Nowhere</div>
          <h2 style={styles.errorTitle}>Address not found</h2>
          <p style={styles.errorDesc}>
            The address <code style={styles.errorCode}>{notFoundAddress}</code> does not lead to any site in the small web.
          </p>
          <div style={styles.errorTips}>
            <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: 'var(--page-text)' }}>What you can do:</p>
            <ul style={styles.tipList}>
              <li>Check for typing errors in the address bar.</li>
              <li>Or publish a new site right here at <button style={styles.linkButton} onClick={onPublish}>this address</button>.</li>
              <li>Return to a familiar place like <button style={styles.linkButton} onClick={() => onNavigate(HOME)}>{HOME}</button>.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // 3. Rendered Sandboxed Site
  const body = site?.body ?? '';
  return (
    <iframe
      ref={iframeRef}
      title={site?.title}
      srcDoc={body.includes('</body>') ? body.replace('</body>', `${INTERCEPTOR}</body>`) : body + INTERCEPTOR}
      // allow-scripts runs the interceptor; no allow-same-origin/top-navigation keeps the
      // page isolated from the app's DOM, storage, and tab.
      sandbox="allow-scripts"
      style={styles.iframe}
    />
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block',
    background: 'var(--page-surface)',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    background: 'var(--page-bg)',
    color: 'var(--page-muted)',
    gap: '16px',
  },
  spinner: {
    width: '36px',
    height: '36px',
    border: '3px solid var(--page-border)',
    borderTop: '3px solid var(--accent)',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  loadingText: {
    fontSize: '14px',
    margin: 0,
    fontFamily: 'system-ui, sans-serif',
  },
  errorContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    background: 'var(--page-bg)',
    padding: '24px',
    fontFamily: 'system-ui, sans-serif',
  },
  errorBox: {
    maxWidth: '520px',
    width: '100%',
    background: 'var(--page-surface)',
    borderRadius: '12px',
    padding: '36px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
    border: '1px solid var(--page-border)',
  },
  errorBadge: {
    display: 'inline-block',
    background: 'var(--danger-soft)',
    color: 'var(--danger)',
    padding: '3px 10px',
    borderRadius: '100px',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    marginBottom: '16px',
  },
  errorTitle: {
    fontSize: '22px',
    color: 'var(--page-text)',
    margin: '0 0 12px 0',
    fontWeight: 700,
  },
  errorDesc: {
    fontSize: '15px',
    color: 'var(--page-muted)',
    lineHeight: 1.6,
    margin: '0 0 24px 0',
  },
  errorCode: {
    background: 'var(--page-bg)',
    color: 'var(--danger)',
    padding: '2px 6px',
    borderRadius: '4px',
    fontSize: '14px',
    fontFamily: 'monospace',
    fontWeight: 600,
  },
  errorTips: {
    background: 'var(--page-bg)',
    border: '1px solid var(--page-border)',
    borderRadius: '8px',
    padding: '16px',
    fontSize: '14px',
  },
  tipList: {
    margin: 0,
    paddingLeft: '20px',
    color: 'var(--page-muted)',
    lineHeight: 1.7,
  },
  linkButton: {
    background: 'none',
    border: 'none',
    padding: 0,
    color: 'var(--accent)',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '14px',
    fontFamily: 'inherit',
  },
};
