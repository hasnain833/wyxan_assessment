'use client';

import React, { useState } from 'react';
import { Site } from '../types';
import { Icon } from './Icon';
import { searchSites } from '../lib/api';

interface SearchPanelProps {
  onClose: () => void;
  onSelectResult: (address: string) => void;
}

// Plain-text preview of a page's HTML.
function snippet(html: string, maxLen = 140) {
  const text = html
    .replace(/<(style|script|title)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
  return text.length <= maxLen ? text : text.slice(0, maxLen) + '...';
}

export function SearchPanel({ onClose, onSelectResult }: SearchPanelProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Site[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setHasSearched(true);
    try {
      const data = await searchSites(query.trim());
      setResults(data);
    } catch (err) {
      console.error(err);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h3 style={styles.title}>Search the Small Web</h3>
          <button onClick={onClose} style={styles.closeBtn} aria-label="Close"><Icon name="close" size={18} /></button>
        </div>

        <form onSubmit={handleSearch} style={styles.searchForm}>
          <input
            type="text"
            autoFocus
            placeholder="Search words across all pages (e.g. tide, pendulum, mortar)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchBtn} disabled={isLoading}>
            {isLoading ? '...' : 'Search'}
          </button>
        </form>

        <div style={styles.resultsContainer}>
          {isLoading ? (
            <div style={styles.empty}>Searching pages...</div>
          ) : hasSearched && results.length === 0 ? (
            <div style={styles.empty}>No sites match "{query}".</div>
          ) : (
            <div style={styles.list}>
              {results.map((site) => (
                <div
                  key={site.address}
                  style={styles.resultCard}
                  onClick={() => {
                    onSelectResult(site.address);
                    onClose();
                  }}
                >
                  <div style={styles.cardTop}>
                    <span style={styles.siteAddress}>{site.address}</span>
                    <span style={styles.authorBadge}>by {site.author}</span>
                  </div>
                  <h4 style={styles.siteTitle}>{site.title}</h4>
                  <p style={styles.siteSnippet}>{snippet(site.body)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
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
    zIndex: 250,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '80px',
  },
  modal: {
    width: '580px',
    maxWidth: '92vw',
    maxHeight: '80vh',
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
    padding: '16px 20px',
    borderBottom: '1px solid var(--surface)',
  },
  title: {
    color: 'var(--text)',
    margin: 0,
    fontSize: '17px',
    fontWeight: 600,
  },
  closeBtn: {
    display: 'flex',
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    fontSize: '18px',
    cursor: 'pointer',
  },
  searchForm: {
    display: 'flex',
    padding: '16px 20px',
    gap: '10px',
    borderBottom: '1px solid var(--surface)',
  },
  searchInput: {
    flex: 1,
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '10px 14px',
    color: 'var(--text)',
    fontSize: '14px',
    outline: 'none',
  },
  searchBtn: {
    background: 'var(--accent)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 18px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  resultsContainer: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px 20px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  resultCard: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '14px',
    cursor: 'pointer',
    transition: 'border-color 0.15s, background 0.15s',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '6px',
  },
  siteAddress: {
    color: 'var(--accent-text)',
    fontFamily: 'monospace',
    fontSize: '13px',
    fontWeight: 600,
  },
  authorBadge: {
    color: 'var(--text-muted)',
    fontSize: '12px',
  },
  siteTitle: {
    color: 'var(--text)',
    margin: '0 0 6px 0',
    fontSize: '15px',
    fontWeight: 600,
  },
  siteSnippet: {
    color: 'var(--text-muted)',
    margin: 0,
    fontSize: '13px',
    lineHeight: 1.5,
  },
  empty: {
    textAlign: 'center',
    color: 'var(--text-subtle)',
    padding: '30px 10px',
    fontSize: '14px',
  },
};
