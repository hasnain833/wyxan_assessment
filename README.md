# Mini Browser

A small browser for a tiny, self-contained web of `.zz` sites. Browse with back/forward, follow links, search every page, publish your own site, and see per-person browsing history.

- **apps/web**: Next.js frontend (the browser UI), http://localhost:3000
- **apps/api**: NestJS + MongoDB backend, http://localhost:3001/api

## Requirements

- Node.js 20 or newer
- npm

MongoDB is optional. Without it the API starts its own in-memory database.

## Run it

```bash
npm install
npm run dev
```

This starts the API and the web app together. Open **http://localhost:3000**. Use `localhost`, not `127.0.0.1`: Next.js blocks its dev scripts on other hostnames and the page gets stuck loading.

To run only one side:

```bash
npm run dev:api   # backend on :3001
npm run dev:web   # frontend on :3000
```

## Database

By default the API starts an **in-memory MongoDB** and seeds it automatically, so the app has content right away. That data resets every time the API restarts.

To use a real MongoDB (local or Atlas), set `MONGODB_URI` before starting. The API reads it from the environment. It does **not** load `.env` files automatically.

```bash
# bash / macOS / Linux
MONGODB_URI="mongodb://localhost:27017/mini-browser" npm run dev
```

```powershell
# PowerShell
$env:MONGODB_URI = "mongodb://localhost:27017/mini-browser"; npm run dev
```

## Seeding

The seed adds 10 sites (including a few links to missing pages), 5 people, and about an hour of browsing history. It is idempotent: running it again never creates duplicates.

- **In the app:** click **Seed Web** in the toolbar.
- **From the terminal:** `npm run seed`. This only makes sense with `MONGODB_URI` set. With the in-memory database, the seeded data vanishes when the command exits.

## Build

```bash
npm run build
```

## API

All routes are under `/api`.

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/sites` | List all sites |
| GET | `/sites/:address` | Get one site (404 if it doesn't exist) |
| GET | `/sites/search?q=` | Full-text search, with partial-word fallback |
| POST | `/sites` | Publish a site: `{ address, title, body, author }` |
| GET | `/people` | List people |
| POST | `/people` | Add a person: `{ name }` |
| GET | `/visits?person=&limit=` | Browsing history, newest first |
| POST | `/visits` | Record a visit: `{ person, address, method }` |
| POST | `/seed` | Run the seed |
