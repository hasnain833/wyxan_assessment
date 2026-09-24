'use client';

import React, { useEffect, useState } from 'react';
import { Visit, VisitMethod } from '../types';
import { Icon } from './Icon';
import { fetchVisits } from '../lib/api';

const BADGE_COLORS: Record<VisitMethod, string> = {
  typed: 'var(--accent)',
  link: '#2f9e74',
  back: '#c98a1b',
  forward: '#8a63d2',
  search: '#c94f7c',
  history: '#3b8fd0',
};

interface HistoryPanelProps {
  currentPerson: string;
  onClose: () => void;
  onJump: (address: string) => void;
}

export function HistoryPanel({ currentPerson, onClose, onJump }: HistoryPanelProps) {
  const [visits, setVisits] = useState<Visit[] | null>(null);

  useEffect(() => {
    fetchVisits(currentPerson).then(setVisits, (err) => {
      console.error(err);
      setVisits([]);
    });
  }, [currentPerson]);

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <div>
            <h3 style={styles.title}>Browsing History</h3>
            <span style={styles.subtitle}>Recorded visits for {currentPerson}</span>
          </div>
          <button onClick={onClose} style={styles.closeBtn} aria-label="Close"><Icon name="close" size={18} /></button>
        </div>

        <div style={styles.body}>
          {!visits ? (
            <div style={styles.empty}>Loading history...</div>
          ) : visits.length === 0 ? (
            <div style={styles.empty}>No recorded visits for {currentPerson} yet.</div>
          ) : (
            <div style={styles.list}>
              {visits.map((visit, idx) => (
                <div
                  key={visit._id || idx}
                  style={styles.item}
                  onClick={() => {
                    onJump(visit.address);
                    onClose();
                  }}
                >
                  <div style={styles.itemLeft}>
                    <span
                      style={{
                        ...styles.badge,
                        background: BADGE_COLORS[visit.method],
                      }}
                    >
                      {visit.method}
                    </span>
                    <span style={styles.address}>{visit.address}</span>
                  </div>
                  <span style={styles.time}>{new Date(visit.timestamp).toLocaleTimeString()}</span>
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
    backdropFilter: 'blur(2px)',
    zIndex: 200,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  panel: {
    width: '420px',
    maxWidth: '90vw',
    height: '100%',
    background: 'var(--bg)',
    borderLeft: '1px solid var(--border)',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'var(--shadow)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 20px',
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
    padding: '4px 8px',
  },
  body: {
    flex: 1,
    overflowY: 'auto',
    padding: '12px 16px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 12px',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.15s',
  },
  itemLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    overflow: 'hidden',
  },
  badge: {
    padding: '2px 6px',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    fontFamily: 'monospace',
    color: '#fff',
  },
  address: {
    color: 'var(--accent-text)',
    fontFamily: 'monospace',
    fontSize: '13px',
    fontWeight: 500,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  time: {
    color: 'var(--text-subtle)',
    fontSize: '12px',
    fontFamily: 'monospace',
    marginLeft: '8px',
    flexShrink: 0,
  },
  empty: {
    textAlign: 'center',
    color: 'var(--text-subtle)',
    padding: '40px 20px',
    fontSize: '14px',
  },
};
