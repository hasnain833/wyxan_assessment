import { Site, Person, Visit, VisitMethod } from '../types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Throws with the API's error message on any non-2xx response.
async function api<T>(path: string, body?: unknown): Promise<T> {
  const res = await fetch(API_BASE + path, {
    cache: 'no-store',
    ...(body !== undefined && {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw Object.assign(new Error(err.message || res.statusText), { status: res.status });
  }
  return res.json();
}

// null means "Nowhere" (404); other failures still throw.
export const fetchSite = (address: string) =>
  api<Site>(`/sites/${encodeURIComponent(address)}`).catch((err) => {
    if (err.status === 404) return null;
    throw err;
  });

export const searchSites = (q: string) => api<Site[]>(`/sites/search?q=${encodeURIComponent(q)}`);
export const createSite = (site: Omit<Site, '_id'>) => api<Site>('/sites', site);
export const fetchPeople = () => api<Person[]>('/people');
export const createPerson = (name: string) => api<Person>('/people', { name });
export const fetchVisits = (person: string) => api<Visit[]>(`/visits?person=${encodeURIComponent(person)}`);
export const recordVisit = (visit: { person: string; address: string; method: VisitMethod }) =>
  api<Visit>('/visits', visit);
export const runSeed = () =>
  api<{ sitesCount: number; peopleCount: number; visitsCount: number }>('/seed', {});
