const path = require("path");
const babel = require("@babel/core");
const terser = require("terser");
const { config, env } = require("../config");

module.exports = code => {
  const babelResult = babel.transformSync(code, {
    presets: [["@babel/preset-env"]],
  });
  if (env.node === "production") {
    let terserResult = terser.minify(babelResult.code, {
      toplevel: true,
    });
    return terserResult.code;
  } else {
    return babelResult.code;
  }
};
