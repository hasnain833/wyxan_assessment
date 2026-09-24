'use client';

import React from 'react';
import { Icon } from './Icon';
import { AddressBar } from './AddressBar';
import { PersonSelector } from './PersonSelector';

interface BrowserChromeProps {
  currentAddress: string;
  isLoading: boolean;
  canGoBack: boolean;
  canGoForward: boolean;
  currentPerson: string;
  onBack: () => void;
  onForward: () => void;
  onNavigate: (address: string) => void;
  onReload: () => void;
  onSelectPerson: (name: string) => void;
  onOpenHistory: () => void;
  onOpenSearch: () => void;
  onOpenPublish: () => void;
  onTriggerSeed: () => void;
  isSeeding?: boolean;
}

export function BrowserChrome({
  currentAddress,
  isLoading,
  canGoBack,
  canGoForward,
  currentPerson,
  onBack,
  onForward,
  onNavigate,
  onReload,
  onSelectPerson,
  onOpenHistory,
  onOpenSearch,
  onOpenPublish,
  onTriggerSeed,
  isSeeding = false,
}: BrowserChromeProps) {
  return (
    <header style={styles.chrome}>
      <div style={styles.topRow}>
        {/* Identity & Branding */}
        <div style={styles.brandGroup}>
          <span style={styles.logo}>mini·browser</span>
          <PersonSelector
            currentPerson={currentPerson}
            onSelectPerson={onSelectPerson}
          />
        </div>

        {/* Navigation buttons + Address bar */}
        <div style={styles.centerGroup}>
          <button onClick={onBack} disabled={!canGoBack} title="Go back" aria-label="Go back" style={navBtn(canGoBack)}>
            <Icon name="back" />
          </button>
          <button onClick={onForward} disabled={!canGoForward} title="Go forward" aria-label="Go forward" style={navBtn(canGoForward)}>
            <Icon name="forward" />
          </button>
          <AddressBar
            currentAddress={currentAddress}
            isLoading={isLoading}
            onNavigate={onNavigate}
            onReload={onReload}
          />
        </div>

        {/* Action Tools */}
        <div style={styles.toolsGroup}>
          <button
            type="button"
            onClick={onOpenSearch}
            style={styles.toolBtn}
            title="Search pages across the small web"
          >
            <Icon name="search" size={14} /> Search
          </button>
          <button
            type="button"
            onClick={onOpenHistory}
            style={styles.toolBtn}
            title="View browsing history"
          >
            <Icon name="history" size={14} /> History
          </button>
          <button
            type="button"
            onClick={onOpenPublish}
            style={{ ...styles.toolBtn, ...styles.publishBtn }}
            title="Publish a new site"
          >
            <Icon name="pencil" size={14} /> Publish
          </button>
          <button
            type="button"
            onClick={onTriggerSeed}
            disabled={isSeeding}
            style={styles.toolBtn}
            title="Run/re-run deterministic database seed"
          >
            <Icon name="sprout" size={14} /> {isSeeding ? 'Seeding...' : 'Seed Web'}
          </button>
        </div>
      </div>
    </header>
  );
}

const navBtn = (enabled: boolean): React.CSSProperties => ({
  ...styles.navBtn,
  opacity: enabled ? 1 : 0.35,
  cursor: enabled ? 'pointer' : 'not-allowed',
});

const styles: { [key: string]: React.CSSProperties } = {
  chrome: {
    background: 'var(--bg)',
    borderBottom: '1px solid var(--surface)',
    padding: '8px 16px',
    color: 'var(--text)',
    userSelect: 'none',
      },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    flexWrap: 'nowrap',
  },
  brandGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexShrink: 0,
  },
  logo: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: '13px',
    color: 'var(--accent-text)',
    letterSpacing: '-0.02em',
  },
  centerGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flex: 1,
    justifyContent: 'center',
  },
  toolsGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flexShrink: 0,
  },
  toolBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    padding: '6px 10px',
    color: 'var(--text)',
    fontSize: '12px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background 0.15s, border-color 0.15s',
  },
  publishBtn: {
    background: 'var(--accent)',
    border: '1px solid var(--accent)',
    color: '#fff',
  },
  navBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '6px',
    border: '1px solid var(--border)',
    background: 'var(--surface)',
    color: 'var(--text)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.15s, border-color 0.15s',
  },
};
