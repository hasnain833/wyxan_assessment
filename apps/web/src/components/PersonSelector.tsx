'use client';

import React, { useState, useEffect } from 'react';
import { Person } from '../types';
import { Icon } from './Icon';
import { fetchPeople, createPerson } from '../lib/api';

interface PersonSelectorProps {
  currentPerson: string;
  onSelectPerson: (name: string) => void;
}

export function PersonSelector({
  currentPerson,
  onSelectPerson,
}: PersonSelectorProps) {
  const [people, setPeople] = useState<Person[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    fetchPeople().then(setPeople).catch(console.error);
  }, []);

  async function handleAddPerson(e: React.FormEvent) {
    e.preventDefault();
    if (!newName.trim()) return;
    try {
      const created = await createPerson(newName.trim());
      setPeople((prev) => [...prev.filter((p) => p.name !== created.name), created]);
      onSelectPerson(created.name);
      setNewName('');
      setIsOpen(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div style={styles.wrapper}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={styles.personButton}
        title="Switch browsing person"
      >
        <span style={styles.avatar}>
          {currentPerson ? currentPerson[0].toUpperCase() : '?'}
        </span>
        <span style={styles.name}>{currentPerson}</span>
        <span style={styles.arrow}><Icon name={isOpen ? 'chevronUp' : 'chevronDown'} size={12} /></span>
      </button>

      {isOpen && (
        <div style={styles.dropdown}>
          <div style={styles.dropdownHeader}>Switch Identity</div>
          <div style={styles.list}>
            {people.map((p) => (
              <button
                key={p.name}
                type="button"
                onClick={() => {
                  onSelectPerson(p.name);
                  setIsOpen(false);
                }}
                style={{
                  ...styles.personItem,
                  ...(p.name === currentPerson ? styles.activePersonItem : {}),
                }}
              >
                <span style={styles.miniAvatar}>{p.name[0].toUpperCase()}</span>
                <span>{p.name}</span>
                {p.name === currentPerson && <span style={styles.checkmark}><Icon name="check" size={14} /></span>}
              </button>
            ))}
          </div>
          <form onSubmit={handleAddPerson} style={styles.addForm}>
            <input
              type="text"
              placeholder="+ New person..."
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={styles.addInput}
            />
          </form>
        </div>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    position: 'relative',
  },
  personButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '4px 10px',
    color: 'var(--text)',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: 500,
  },
  avatar: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: 'var(--accent)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  name: {
    maxWidth: '90px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  arrow: {
    display: 'flex',
    fontSize: '10px',
    color: 'var(--text-muted)',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    marginTop: '6px',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    boxShadow: 'var(--shadow)',
    zIndex: 100,
    minWidth: '180px',
    overflow: 'hidden',
  },
  dropdownHeader: {
    padding: '8px 12px',
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--text-muted)',
    borderBottom: '1px solid var(--border)',
  },
  list: {
    maxHeight: '220px',
    overflowY: 'auto',
  },
  personItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 12px',
    background: 'none',
    border: 'none',
    color: 'var(--text)',
    cursor: 'pointer',
    fontSize: '13px',
    textAlign: 'left',
  },
  activePersonItem: {
    background: 'var(--bg)',
    color: 'var(--accent-text)',
    fontWeight: 600,
  },
  miniAvatar: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'var(--border)',
    color: 'var(--text)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    fontWeight: 600,
  },
  checkmark: {
    display: 'flex',
    marginLeft: 'auto',
    color: 'var(--accent-text)',
    fontSize: '12px',
  },
  addForm: {
    padding: '8px 10px',
    borderTop: '1px solid var(--border)',
  },
  addInput: {
    width: '100%',
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    padding: '5px 8px',
    color: 'var(--text)',
    fontSize: '12px',
    outline: 'none',
  },
};
