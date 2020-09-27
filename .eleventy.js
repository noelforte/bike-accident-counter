const YAML = require("yaml");
const md = require("markdown-it");
const { config, env, filters, shortcodes } = require("./config");
const path = require("path");

module.exports = eleventy => {
  const options = {
    dir: {
      input: path.basename(config.source),
      output: path.basename(config.dest),
      data: "data",
    },
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "11ty.js"],
  };

  // Filters
  Object.keys(filters).forEach(filter => {
    eleventy.addFilter(filter, filters[filter]);
  });

  // Shortcodes
  Object.keys(shortcodes).forEach(shortcode => {
    eleventy.addShortcode(shortcode, shortcodes[shortcode]);
  });

  // Custom Data Formats
  eleventy.addDataExtension("yaml", contents => YAML.parse(contents));

  // Markdown Library
  eleventy.setLibrary("md", md(config.markdown));

  // Passthroughs
  let passthroughs = [];
  passthroughs.forEach(passthrough =>
    eleventy.addPassthroughCopy(`${options.dir.input}/${passthrough}`)
  );

  // Return Main Config //
  return options;
};
