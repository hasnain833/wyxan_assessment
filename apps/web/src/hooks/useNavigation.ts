'use client';

import { useState, useEffect } from 'react';
import { Site, VisitMethod } from '../types';
import { fetchSite, recordVisit } from '../lib/api';

export const HOME = 'tidepool.zz';

export function normalizeAddress(addr: string): string {
  const cleaned = addr.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/+$/, '');
  if (!cleaned) return '';
  // Bare names default to the .zz small-web domain.
  return cleaned.includes('.') ? cleaned : `${cleaned}.zz`;
}

export function useNavigation(person: string) {
  // Tab history: a stack of addresses plus a cursor, like a real browser.
  const [nav, setNav] = useState({ stack: [HOME], cursor: 0 });
  const [site, setSite] = useState<Site | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);
  const currentAddress = nav.stack[nav.cursor];

  // Keyed on `nav`, not the address, so re-navigating to the same address
  // (e.g. right after publishing it) still refetches.
  useEffect(() => {
    let stale = false; // ignore responses for pages we've already navigated away from
    setIsLoading(true);
    fetchSite(nav.stack[nav.cursor])
      .catch(() => null)
      .then((s) => {
        if (stale) return;
        setSite(s);
        setIsLoading(false);
      });
    return () => {
      stale = true;
    };
  }, [nav, reloadKey]);

  const record = (address: string, method: VisitMethod) =>
    recordVisit({ person, address, method }).catch((err) => console.error('Failed to record visit:', err));

  // New navigation drops any forward history.
  function navigate(raw: string, method: VisitMethod) {
    const address = normalizeAddress(raw);
    if (!address) return;
    setNav(({ stack, cursor }) => ({ stack: [...stack.slice(0, cursor + 1), address], cursor: cursor + 1 }));
    record(address, method);
  }

  function go(step: -1 | 1) {
    const cursor = nav.cursor + step;
    if (cursor < 0 || cursor >= nav.stack.length) return;
    setNav({ ...nav, cursor });
    record(nav.stack[cursor], step < 0 ? 'back' : 'forward');
  }

  return {
    currentAddress,
    site,
    isLoading,
    notFoundAddress: !isLoading && !site ? currentAddress : null,
    canGoBack: nav.cursor > 0,
    canGoForward: nav.cursor < nav.stack.length - 1,
    navigate,
    goBack: () => go(-1),
    goForward: () => go(1),
    reload: () => setReloadKey((k) => k + 1),
    reset: () => setNav({ stack: [HOME], cursor: 0 }),
  };
}
