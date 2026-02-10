# Specification

## Summary
**Goal:** Upgrade the existing site to support hands-free ingestion, processing, categorization, image generation, and daily auto-publishing of education updates while preserving current URL/routing, design/layout, and Google Search Console verification.

**Planned changes:**
- Preserve current frontend URL structure, routes, layout, and all existing meta tags (including the current `google-site-verification` tag in `frontend/index.html`).
- Add backend persistent storage and query APIs for published posts (id, title, category, date, excerpt, body HTML, optional stateTags, image reference), including list/filter and single-post fetch.
- Add a minimal, guarded owner ingestion flow (raw text and/or source URL + optional category/state tag hints) that queues submissions for processing without changing public navigation.
- Implement backend processing to rewrite ingested items into student-friendly English (new title, excerpt, and HTML body with headings/bullets) and auto-assign categories using hints and/or deterministic rules.
- Programmatically generate a simple, consistent, category-themed image per published post (no third-party AI services) and serve it for frontend rendering with a safe fallback if generation fails.
- Add a daily backend scheduler to auto-publish processed queued items; ensure public pages never appear empty by falling back to existing seed content when backend has no posts.
- Update frontend data sourcing so home/category/search and post detail pages prefer backend posts but fall back to `seedUpdates`, without changing existing routes or overall layout.
- Ensure safe canister upgrade behavior: keep existing backend state intact and add new persistent post/queue state with migration only if required.

**User-visible outcome:** The public site continues to look and behave the same (same URLs and layout) but automatically publishes new categorized posts with images daily; the owner can occasionally submit raw content or official links via a minimal form, and the site always shows content via fallback when no new backend posts exist.
