# Mini Browser — Task List

## Phase 1: Project Setup & Configuration
- [x] Initialize root workspace with package.json
- [x] Scaffold Next.js app in `apps/web`
- [x] Scaffold NestJS app in `apps/api`
- [x] Configure MongoDB connection in NestJS
- [x] Configure CORS and proxy between frontend/backend (CORS only; web calls the API URL directly)
- [x] Verify both apps start and communicate

## Phase 2: Backend — Database Schemas & Core API
- [x] Create Site schema + SitesModule (CRUD + text search)
- [x] Create Person schema + PeopleModule (list)
- [x] Create Visit schema + VisitsModule (record + query by person)
- [x] Add MongoDB text index on sites (title + body)
- [x] Test all endpoints with manual requests

## Phase 3: Seed Data
- [x] Write 10 sites with real prose, interlinking, and broken links
- [x] Write 5 people entries
- [x] Write ~1 hour of browsing history (deterministic timestamps)
- [x] Create idempotent seed command/endpoint
- [x] Verify seed runs twice without duplicating data

## Phase 4: Frontend — Core Browser UI
- [ ] Person selector landing page (identity is a toolbar dropdown; no separate landing page yet)
- [x] Browser chrome layout (toolbar + viewport)
- [x] Address bar component (type + enter to navigate)
- [x] Back/Forward navigation buttons
- [x] Page viewport with sandboxed iframe
- [x] Error page for broken addresses ("Nowhere")
- [x] Link interception from iframe via postMessage

## Phase 5: Frontend — Navigation Logic
- [x] `useNavigation` hook (stack + cursor model)
- [x] Navigate: truncate forward stack, push, advance cursor
- [x] Back: decrement cursor
- [x] Forward: increment cursor
- [x] Forward lost on new navigation (standard browser behavior)
- [x] Visit recording on each navigation (POST to API)
- [x] "Restore on return" — back shows same page content

## Phase 6: Frontend — History, Search, Publish
- [x] History panel (scrollable, per person, jumpable)
- [x] Search panel (full-text, results as clickable addresses)
- [x] Publish modal (address + title + HTML textarea)
- [x] Validation on publish (address uniqueness, required fields)

## Phase 7: Polish & Verification
- [x] Consistent mid-level styling (clean, professional)
- [ ] Smooth transitions for panels (panels open instantly, no animation)
- [x] Test: browse 4 deep, back/forward across it
- [x] Test: search + jump to result
- [x] Test: publish a new site + navigate to it
- [x] Test: broken address shows "Nowhere" page
- [x] Test: switch person, see different history
- [x] Test: seed idempotency
- [x] README with run commands
