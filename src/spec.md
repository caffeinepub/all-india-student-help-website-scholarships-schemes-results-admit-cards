# Specification

## Summary
**Goal:** Add the provided Google Search Console verification meta tag to the site-wide HTML document `<head>`.

**Planned changes:**
- Add `<meta name="google-site-verification" content="hym4U2k_e6Y32exhxiM5yIhLCPh_rYLDWpY5B2Mr9wQ" />` to the global `<head>` so it renders on every route.
- Publish/deploy a new production build containing the updated global `<head>` metadata.

**User-visible outcome:** No visual changes; the site will include the Google Search Console verification meta tag in the document `<head>` across all pages/routes.
