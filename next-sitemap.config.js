/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shivam-ramraika.vercel.app',
  generateRobotsTxt: true, // <- this auto-generates the correct robots.txt
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
};