const { config } = require(".");
const { DateTime } = require("luxon");
const md = require("markdown-it")(config.markdown);

module.exports = {
  formatDate: (date, format) => {
    return DateTime.fromJSDate(date).toFormat(format);
  },
  markdown: code => {
    return md.render(code);
  },
  processScript: require("../processors/scripts"),
};
