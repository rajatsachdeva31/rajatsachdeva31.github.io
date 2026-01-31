/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://rajatsachdeva.me",
  generateRobotsTxt: true,
  sitemapSize: 5000,

  transform: async (config, path) => {
    // Homepage
    if (path === "/") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 1.0,
      };
    }

    // Blog index
    if (path === "/blog") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
      };
    }

    // Blog posts
    if (path.startsWith("/blog/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.6,
      };
    }

    // Default pages
    return {
      loc: path,
      changefreq: "monthly",
      priority: 0.8,
    };
  },
};
