# DEPLOYMENT_FIX_REPORT.md

## Root Cause

The application returned `404: NOT_FOUND` on page refresh because **`public/vercel.json` was overriding the correct root-level `vercel.json`** at build time.

Vite copies every file inside `public/` directly into `dist/` verbatim. This means `dist/vercel.json` was being produced from `public/vercel.json`, not from the root `vercel.json`. Vercel reads the config from the output directory (`dist/`), so the root `vercel.json` was effectively ignored on every deployment.

The `public/vercel.json` contained:

```json
{
  "cleanUrls": true,
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

The `{ "handle": "filesystem" }` directive tells Vercel to serve real static files first and only fall back to the next route if a matching file exists on disk. Since `/about`, `/projects`, `/services`, `/contact`, and `/certificates` are not real files in `dist/`, Vercel found no match after the filesystem check and returned `404` — the fallback `dest: /index.html` was never reached because the `routes` array was processed incorrectly with the legacy API.

Additionally, the `routes` key is the **deprecated Vercel routing API**. Mixing it with `cleanUrls` causes undefined behavior. The correct modern API uses `rewrites`.

## Files Changed

| File | Action | Reason |
|---|---|---|
| `public/vercel.json` | **Deleted** | Was being copied into `dist/` by Vite, overriding the correct root config with a broken legacy `routes` config |

## Why the Issue Happened

1. The project had **two `vercel.json` files**: one at the root (correct) and one inside `public/` (broken).
2. Vite's build process copies `public/` contents into `dist/` — so `dist/vercel.json` always came from `public/vercel.json`.
3. Vercel reads deployment config from the output directory. The root `vercel.json` was never used.
4. The `public/vercel.json` used the deprecated `routes` API with `{ "handle": "filesystem" }`, which caused Vercel to return 404 for all SPA client-side routes instead of serving `index.html`.

## Why the Solution Works

The root `vercel.json` uses the modern `rewrites` API:

```json
{
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

With `public/vercel.json` deleted, Vite no longer copies any `vercel.json` into `dist/`. Vercel then reads the root `vercel.json` directly (Vercel reads root config before checking the output directory for framework projects). The `rewrites` rule catches every request that doesn't match a real static asset and serves `index.html`, allowing React Router's `BrowserRouter` to handle the route client-side. This is the correct SPA fallback pattern.

## Future Recommendations

1. **Never place `vercel.json` inside `public/`** — anything in `public/` is served as a static file and also copied into `dist/`, which will shadow your root deployment config.
2. **Use `rewrites` not `routes`** — the `routes` key is the legacy Vercel routing API and is incompatible with `rewrites`, `redirects`, and `headers` keys. Always use `rewrites` for SPA fallback.
3. **The `_redirects` file** in the project root is a Netlify-specific file and has no effect on Vercel. It can be removed to avoid confusion.
4. **The `public/.htaccess` file** is Apache server config and has no effect on Vercel. It can be removed.
5. Consider adding a `"framework": "vite"` hint to `vercel.json` so Vercel auto-detects the output directory without manual configuration.
