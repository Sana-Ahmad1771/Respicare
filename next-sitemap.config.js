/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.respicare.com', // your website URL
  generateRobotsTxt: true,             // (optional) automatically generate robots.txt
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  // Optional: exclude pages
  exclude: ['/admin/*', '/drafts/*'],
};
