'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';

interface AddressBarProps {
  currentAddress: string;
  isLoading: boolean;
  onNavigate: (address: string) => void;
  onReload: () => void;
}

export function AddressBar({
  currentAddress,
  isLoading,
  onNavigate,
  onReload,
}: AddressBarProps) {
  const [inputVal, setInputVal] = useState(currentAddress);
  const [isFocused, setIsFocused] = useState(false);

  // Synchronize input when the external address changes (unless the user is actively typing)
  useEffect(() => {
    if (!isFocused) {
      setInputVal(currentAddress);
    }
  }, [currentAddress, isFocused]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inputVal.trim()) {
      onNavigate(inputVal.trim());
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={{ ...styles.barWrapper, ...(isFocused ? styles.barFocused : {}) }}>
        <span style={styles.scheme}>web://</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Enter address (e.g. tidepool.zz)..."
          style={styles.input}
          spellCheck={false}
          autoComplete="off"
        />
        {isLoading ? (
          <div style={styles.loadingDot} title="Loading page..." />
        ) : (
          <button
            type="button"
            onClick={onReload}
            title="Reload page"
            style={styles.reloadBtn}
          >
            <Icon name="reload" size={15} />
          </button>
        )}
      </div>
      <button type="submit" style={styles.goBtn}>
        Go
      </button>
    </form>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  form: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    gap: '8px',
    maxWidth: '680px',
  },
  barWrapper: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '4px 10px',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  },
  barFocused: {
    border: '1px solid var(--accent)',
    boxShadow: '0 0 0 3px var(--accent-soft)',
  },
  scheme: {
    color: 'var(--text-subtle)',
    fontSize: '13px',
    fontFamily: 'monospace',
    userSelect: 'none',
    marginRight: '6px',
  },
  input: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: 'var(--text)',
    fontSize: '14px',
    fontFamily: 'monospace',
    padding: '4px 0',
  },
  reloadBtn: {
    display: 'flex',
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '0 4px',
    lineHeight: 1,
  },
  loadingDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent-text)',
    animation: 'pulse 1s infinite alternate',
  },
  goBtn: {
    background: 'var(--accent)',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '7px 14px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background 0.15s',
  },
};
