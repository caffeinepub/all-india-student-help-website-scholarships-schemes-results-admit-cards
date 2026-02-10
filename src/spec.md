# Specification

## Summary
**Goal:** Automate daily ingestion of new content and hero images from admin-configured online sources, and enable centralized brand image updates plus a cohesive editorial visual refresh.

**Planned changes:**
- Add backend support to CRUD a list of admin-configured content sources (RSS/Atom/JSON), fetch enabled sources, deduplicate items, and convert new items into queued posts mapped to existing categories.
- Add backend scheduling to run ingestion once per day and provide an admin-only “Run ingestion now” trigger, with queryable last-run status, counts, and recent errors.
- Add backend logic to set/refresh ingested post hero images using source-provided image URLs when available, otherwise relying on existing category fallback behavior; normalize stored image URLs.
- Add an admin-only frontend screen to manage sources, trigger ingestion, and view last run time, stats, and errors (reusing existing admin guard patterns).
- Replace hardcoded branding image usage with a backend-configurable brand image reference, with safe frontend fallback to the existing static logo if unset or load fails.
- Apply an editorial-style theme refresh (warm neutrals, high-contrast typography, subtle paper-like surfaces) across key pages (Home, list pages, Post detail, header/footer) without changing routes or site structure.

**User-visible outcome:** Admins can configure approved content sources and run or schedule daily ingestion to auto-add new posts with images; admins can update the site’s brand image centrally; users see a refreshed editorial theme across the site.
