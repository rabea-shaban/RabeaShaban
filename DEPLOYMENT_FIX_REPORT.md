# DEPLOYMENT_FIX_REPORT.md

## Summary

Four distinct issues were found and fixed. All of them contributed to the 404-on-refresh problem or would have caused it under specific conditions.

---

## Issue 1 — `vercel.json` used deprecated `routes` API with `{ "handle": "filesystem" }`

### Why it happened

A previous commit (`4dbe44f`) added `{ "handle": "filesystem" }` to `vercel.json` in an attempt to serve static files like `sitemap.xml` correctly. This is the legacy Vercel routing API. The `handle: filesystem` directive tells Vercel: *check if a real file exists at this path first, and only continue to the next route if no file is found.* Since `/about`, `/projects`, `/services`, `/contact`, and `/certificates` are not real files in `dist/`, Vercel found no match and returned 404 — the fallback `dest: /index.html` was never reached.

### Fix

Replaced the deprecated `routes` array with the modern `rewrites` key. The `rewrites` API is the correct way to implement SPA fallback on Vercel. It uses a negative lookahead regex to exclude real static asset paths (`/assets/...` and any path containing a file extension) so those are served directly, while all other paths fall through to `index.html`.

```json
{
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/((?!assets|.*\\..*).*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## Issue 2 — `public/vercel.json` shadowed the root `vercel.json`

### Why it happened

A second commit (`ce76bb0`) placed a `vercel.json` inside `public/`. Vite copies everything in `public/` verbatim into `dist/` at build time. Vercel reads deployment config from the output directory (`dist/`), so `dist/vercel.json` (from `public/vercel.json`) was the config Vercel actually used — the root `vercel.json` was completely ignored on every deployment.

The `public/vercel.json` contained the broken `routes` + `handle: filesystem` config, making Issue 1 permanent regardless of what the root `vercel.json` said.

### Fix

Deleted `public/vercel.json`. The root `vercel.json` is now the only config file and is read correctly by Vercel.

---

## Issue 3 — Route case mismatch: `/Certificates` vs `/certificates`

### Why it happened

`App.jsx` defined the route as `path="/Certificates"` (capital C). The sitemap generator in `scripts/generate-seo.cjs` also used `/Certificates`. Vercel's servers run on Linux, where URLs are case-sensitive. Any link or bookmark using `/certificates` (lowercase) would hit the `*` wildcard route and render the NotFound page instead of the Certificates page.

### Fix

- Changed `path="/Certificates"` to `path="/certificates"` in `src/App.jsx`
- Changed `/Certificates` to `/certificates` in `scripts/generate-seo.cjs`

Both the route and the sitemap now consistently use lowercase, matching standard URL conventions.

---

## Issue 4 — Dead config files: `_redirects` and `public/.htaccess`

### Why it happened

- `_redirects` is a Netlify-specific file. It has zero effect on Vercel.
- `public/.htaccess` is Apache server config. Vercel is not Apache and ignores it entirely. It gets copied into `dist/` and served as a downloadable static file.

Neither file causes the 404 directly, but both create confusion about which routing config is actually active.

### Recommendation

These files can be safely deleted. They are not removed automatically here to avoid unrelated changes, but they serve no purpose on Vercel.

---

## Files Changed

| File | Change |
|---|---|
| `vercel.json` | Replaced deprecated `routes` + `handle: filesystem` with modern `rewrites` using asset-excluding regex |
| `public/vercel.json` | Deleted — was being copied into `dist/` and overriding the root config |
| `src/App.jsx` | Changed `path="/Certificates"` to `path="/certificates"` |
| `scripts/generate-seo.cjs` | Changed `/Certificates` to `/certificates` in sitemap pages array |

---

## Why the Solution Works

Vercel's `rewrites` key processes routes **after** static file serving by default. The regex `/((?!assets|.*\\..*).*)`  matches any path that:
- Does not start with `assets/` (protects the Vite JS/CSS bundle directory)
- Does not contain a `.` (protects files like `logo.png`, `sitemap.xml`, `robots.txt`, `cv.pdf`)

All SPA routes (`/`, `/about`, `/projects`, `/services`, `/contact`, `/certificates`) contain no dots and don't start with `assets/`, so they are rewritten to `index.html`. React Router's `BrowserRouter` then reads `window.location.pathname` and renders the correct page component.

---

## Future Recommendations

1. Never place `vercel.json` inside `public/` — it will be copied into `dist/` and shadow the root config.
2. Always use `rewrites` not `routes` for SPA fallback on Vercel. The `routes` key is the legacy API and is incompatible with `rewrites`, `redirects`, and `headers`.
3. Keep all URL paths lowercase. Linux servers are case-sensitive; `/Certificates` and `/certificates` are different URLs.
4. Remove `_redirects` (Netlify) and `public/.htaccess` (Apache) — they do nothing on Vercel and mislead anyone debugging routing issues.
5. The `dist/` folder is in `.gitignore` and should never be committed. Vercel builds from source on every deployment.
