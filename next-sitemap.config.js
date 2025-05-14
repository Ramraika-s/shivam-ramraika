/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shivam-ramraika.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  alternateRefs: [
    { href: 'https://shivam-ramraika.vercel.app/en', hreflang: 'en' },
    { href: 'https://shivam-ramraika.vercel.app/es', hreflang: 'es' },
    { href: 'https://shivam-ramraika.vercel.app/fr', hreflang: 'fr' },
    { href: 'https://shivam-ramraika.vercel.app/de', hreflang: 'de' },
    { href: 'https://shivam-ramraika.vercel.app/zh', hreflang: 'zh' },
  ],
  additionalPaths: async (config) => [
    { loc: '/custom-page', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/about', changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() },
    { loc: '/contact', changefreq: 'monthly', priority: 0.5, lastmod: new Date().toISOString() },
    { loc: '/services', changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() },
    { loc: '/portfolio', changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() },
  ],
};