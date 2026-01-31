/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://rajatsachdeva.me",
  generateRobotsTxt: true,

  // 👇 force single sitemap file
  sitemapSize: 100000,
  generateIndexSitemap: false,

  transform: async (config, path) => {
    if (path === "/") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 1.0,
      };
    }

    if (path === "/blog") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
      };
    }

    if (path.startsWith("/blog/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.6,
      };
    }

    return {
      loc: path,
      changefreq: "monthly",
      priority: 0.8,
    };
  },
};
