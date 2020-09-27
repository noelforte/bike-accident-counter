const path = require("path");

module.exports.env = {
  node: process.env.NODE_ENV,
  eleventy: process.env.ELEVENTY_ENV,
};

module.exports.config = {
  source: path.resolve("source"),
  dest: path.resolve("build"),
  markdown: {
    html: true,
    typography: true,
  },
};

module.exports.filters = require("./filters");
module.exports.shortcodes = require("./shortcodes");
