'use client';

import React, { useState } from 'react';
import { useNavigation } from '../hooks/useNavigation';
import { BrowserChrome } from '../components/BrowserChrome';
import { PageViewport } from '../components/PageViewport';
import { HistoryPanel } from '../components/HistoryPanel';
import { SearchPanel } from '../components/SearchPanel';
import { PublishModal } from '../components/PublishModal';
import { runSeed } from '../lib/api';

type Panel = 'history' | 'search' | 'publish' | null;

export default function MiniBrowserApp() {
  const [currentPerson, setCurrentPerson] = useState('Ada');
  const [panel, setPanel] = useState<Panel>(null);
  const [isSeeding, setIsSeeding] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const nav = useNavigation(currentPerson);
  const close = () => setPanel(null);

  function showToast(msg: string) {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  }

  function handleSelectPerson(name: string) {
    setCurrentPerson(name);
    nav.reset();
    showToast(`Switched browsing identity to: ${name}`);
  }

  async function handleSeed() {
    setIsSeeding(true);
    try {
      const res = await runSeed();
      showToast(`Seeded ${res.sitesCount} sites, ${res.peopleCount} people, ${res.visitsCount} visits!`);
      nav.reload();
    } catch (err) {
      showToast(`Seed error: ${(err as Error).message}`);
    } finally {
      setIsSeeding(false);
    }
  }

  return (
    <div style={styles.appContainer}>
      {notification && <div style={styles.toast}>{notification}</div>}

      <BrowserChrome
        currentAddress={nav.currentAddress}
        isLoading={nav.isLoading}
        canGoBack={nav.canGoBack}
        canGoForward={nav.canGoForward}
        currentPerson={currentPerson}
        onBack={nav.goBack}
        onForward={nav.goForward}
        onNavigate={(addr) => nav.navigate(addr, 'typed')}
        onReload={nav.reload}
        onSelectPerson={handleSelectPerson}
        onOpenHistory={() => setPanel('history')}
        onOpenSearch={() => setPanel('search')}
        onOpenPublish={() => setPanel('publish')}
        onTriggerSeed={handleSeed}
        isSeeding={isSeeding}
      />

      <main style={styles.mainViewport}>
        <PageViewport
          site={nav.site}
          notFoundAddress={nav.notFoundAddress}
          isLoading={nav.isLoading}
          onNavigate={(target) => nav.navigate(target, 'link')}
          onPublish={() => setPanel('publish')}
        />
      </main>

      {panel === 'history' && (
        <HistoryPanel currentPerson={currentPerson} onClose={close} onJump={(addr) => nav.navigate(addr, 'history')} />
      )}
      {panel === 'search' && <SearchPanel onClose={close} onSelectResult={(addr) => nav.navigate(addr, 'search')} />}
      {panel === 'publish' && (
        <PublishModal
          currentPerson={currentPerson}
          initialAddress={nav.notFoundAddress || ''}
          onClose={close}
          onPublished={(addr) => {
            showToast(`Published site at ${addr}! Navigating...`);
            nav.navigate(addr, 'typed');
          }}
        />
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    position: 'relative',
  },
  mainViewport: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  toast: {
    position: 'fixed',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'var(--surface)',
    color: 'var(--text)',
    border: '1px solid var(--border)',
    padding: '10px 20px',
    borderRadius: '100px',
    fontSize: '13px',
    fontWeight: 600,
    zIndex: 9999,
    boxShadow: 'var(--shadow)',
    pointerEvents: 'none',
  },
};
