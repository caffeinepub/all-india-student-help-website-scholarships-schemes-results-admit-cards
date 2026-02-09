# Specification

## Summary
**Goal:** Add a lightweight, site-wide search experience so students can quickly find relevant updates/posts.

**Planned changes:**
- Add a new Search page route (e.g., `/search`) rendered within the existing `SiteLayout`, with SEO title/meta set via the existing `usePageMeta` hook.
- Implement a labeled search input on the Search page that filters across all seeded updates (at minimum: title + excerpt) and renders matches using the existing `UpdateCard` layout, linking to `/post/$postId`.
- Add a header search entry point for desktop and mobile that navigates to `/search?q=...` and pre-fills the Search page from the URL query parameter.
- Implement fast, client-side, case-insensitive string matching with trimmed whitespace, deterministic result ordering, and no heavy dependencies.
- Add helpful empty states for (1) empty query and (2) zero matches (“No results found” with suggestion).

**User-visible outcome:** Students can use a search control from the header (desktop/mobile) to open a Search page, type a query, and see matching updates displayed as familiar cards; empty and no-result states clearly guide them.
