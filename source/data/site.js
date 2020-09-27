const { env } = require("../../config");

const global = {
  title: "bikecounter.4te.fun",
  tagline: "Keeping track of how long it’s been since Noel bit the dust on the bike.",
  description:
    "Noel owns a bike that he rides semi-regularly. Sometimes, he crashes and hurts himself. This site keeps track of that.",
  time: new Date(),
};

const dev = {
  url: "",
};

const prod = {
  url: "https://bike.4te.fun/",
};

function siteData(env) {
  if (env === "production") {
    return Object.assign(global, prod);
  } else {
    return Object.assign(global, dev);
  }
}

module.exports = siteData(env.eleventy);
