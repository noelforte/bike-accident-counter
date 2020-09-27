const { env } = require("../../config");

const global = {
  description:
    "Noel owns a bike that he rides semi-regularly. Sometimes, he crashes and hurts himself. This site keeps track of that.",
  time: new Date(),
};

const dev = {
  title: "NF Bike (local)",
  url: "",
};

const prod = {
  title: "The Noel-Bike-Accident Counter",
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
