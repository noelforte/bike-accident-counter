const path = require("path");
const { config, env } = require("../config");
const sass = require("sass");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const CleanCSS = require("clean-css");

const postCssPlugins = [autoprefixer];

module.exports = file => {
  let sassResult = sass.renderSync({ file: path.join(config.source, file) });
  let postcssResult = postcss(postCssPlugins).process(sassResult.css, {
    from: "main.css",
    to: "main.css",
    map: {
      prev: sassResult.map,
      inline: true,
    },
  });
  if (env.node === "production" || env.eleventy === "prime") {
    let cleanCssResult = new CleanCSS({}).minify(postcssResult.css).styles;
    return cleanCssResult;
  } else {
    return postcssResult.css;
  }
};
