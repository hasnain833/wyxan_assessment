'use client';

import React, { useState } from 'react';
import { createSite } from '../lib/api';
import { Icon } from './Icon';
import { normalizeAddress } from '../hooks/useNavigation';

interface PublishModalProps {
  currentPerson: string;
  onClose: () => void;
  onPublished: (address: string) => void;
  initialAddress?: string;
}

const DEFAULT_HTML_TEMPLATE = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>My New Page</title>
  <style>
    body { font-family: system-ui, sans-serif; line-height: 1.6; color: #1e293b; background: #f8fafc; margin: 0; padding: 40px 20px; }
    .page { max-width: 640px; margin: 0 auto; background: #ffffff; padding: 36px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    h1 { color: #0f172a; margin-top: 0; }
    p { margin-bottom: 16px; font-size: 16px; }
    a { color: #0284c7; text-decoration: underline; }
  </style>
</head>
<body>
  <div class="page">
    <h1>My Dispatch to the Small Web</h1>
    <p>Write your thoughts, observations, and links to other sites here.</p>
    <p>Read coastal notes at <a href="tidepool.zz">tidepool.zz</a> or the night survey at <a href="nightowl.zz">nightowl.zz</a>.</p>
  </div>
</body>
</html>`;

export function PublishModal({
  currentPerson,
  onClose,
  onPublished,
  initialAddress = '',
}: PublishModalProps) {
  const [address, setAddress] = useState(initialAddress);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState(currentPerson);
  const [body, setBody] = useState(DEFAULT_HTML_TEMPLATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handlePublish(e: React.FormEvent) {
    e.preventDefault();
    if (!address.trim() || !title.trim() || !author.trim() || !body.trim()) {
      setErrorMsg('All fields are required.');
      return;
    }

    const cleanAddr = normalizeAddress(address);

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await createSite({
        address: cleanAddr,
        title: title.trim(),
        author: author.trim(),
        body: body.trim(),
      });
      onPublished(cleanAddr);
      onClose();
    } catch (err) {
      setErrorMsg((err as Error).message || 'Failed to publish site.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <div>
            <h3 style={styles.title}>Publish a Site</h3>
            <span style={styles.subtitle}>Add a new page to the small web</span>
          </div>
          <button onClick={onClose} style={styles.closeBtn} aria-label="Close"><Icon name="close" size={18} /></button>
        </div>

        <form onSubmit={handlePublish} style={styles.form}>
          {errorMsg && <div style={styles.errorBanner}>{errorMsg}</div>}

          <div style={styles.row}>
            <div style={styles.field}>
              <label style={styles.label}>Address</label>
              <input
                type="text"
                placeholder="e.g. wanderer.zz"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Page Title</label>
            <input
              type="text"
              placeholder="e.g. Field Notes from the High Ridge"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>HTML Content</label>
            <textarea
              rows={12}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              style={styles.textarea}
              required
              spellCheck={false}
            />
          </div>

          <div style={styles.actions}>
            <button
              type="button"
              onClick={onClose}
              style={styles.cancelBtn}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Publishing...' : 'Publish to the Web'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'var(--overlay)',
    backdropFilter: 'blur(3px)',
    zIndex: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  modal: {
    width: '680px',
    maxWidth: '96vw',
    maxHeight: '90vh',
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'var(--shadow)',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 22px',
    borderBottom: '1px solid var(--surface)',
  },
  title: {
    color: 'var(--text)',
    margin: 0,
    fontSize: '18px',
    fontWeight: 600,
  },
  subtitle: {
    color: 'var(--text-muted)',
    fontSize: '13px',
  },
  closeBtn: {
    display: 'flex',
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    fontSize: '18px',
    cursor: 'pointer',
  },
  form: {
    padding: '20px 22px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    overflowY: 'auto',
  },
  errorBanner: {
    background: 'var(--danger-soft)',
    color: 'var(--danger)',
    padding: '10px 14px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: 500,
  },
  row: {
    display: 'flex',
    gap: '14px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flex: 1,
  },
  label: {
    color: 'var(--text)',
    fontSize: '13px',
    fontWeight: 500,
  },
  input: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    padding: '8px 12px',
    color: 'var(--text)',
    fontSize: '14px',
    outline: 'none',
  },
  textarea: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    padding: '10px 12px',
    color: 'var(--text)',
    fontSize: '13px',
    fontFamily: 'monospace',
    lineHeight: 1.5,
    outline: 'none',
    resize: 'vertical',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    marginTop: '6px',
  },
  cancelBtn: {
    background: 'var(--surface)',
    color: 'var(--text)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    padding: '8px 16px',
    fontSize: '13px',
    cursor: 'pointer',
  },
  submitBtn: {
    background: 'var(--accent)',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 18px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
  },
};
