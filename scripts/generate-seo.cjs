const fs = require('fs');
const path = require('path');

// 1. Read Domain from Config
let config;
try {
  const configPath = path.join(__dirname, '../siteConfig.json');
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} catch (error) {
  console.error('Error reading siteConfig.json, using fallback domain.');
  config = { domain: 'https://rabea-shaban.com' };
}

const domain = config.domain.replace(/\/$/, ''); // Remove trailing slash if any

// 2. Define Sitemap pages
const pages = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects', priority: '0.9', changefreq: 'monthly' },
  { path: '/services', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/Certificates', priority: '0.7', changefreq: 'monthly' }
];

const currentDate = new Date().toISOString().split('T')[0];

// 3. Generate sitemap.xml content
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${domain}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

// 4. Generate robots.txt content
const robotsContent = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

// 5. Ensure public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 6. Write files
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent.trim() + '\n');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent.trim() + '\n');

console.log(`Successfully generated dynamic sitemap.xml and robots.txt for: ${domain}`);
