const { config, env } = require(".");
const { DateTime, Interval } = require("luxon");
const path = require("path");

module.exports = {
  processSass: require("../processors/styles"),
  previousRecord: (latest, previous) => {
    const end = DateTime.fromISO(latest);
    const start = DateTime.fromISO(previous);
    const i = Interval.fromDateTimes(start, end);

    const diff = end.diff(start, "days").days;

    return `${diff.toString()} ${diff == 1 ? "day" : "days"}`;
  },
};
