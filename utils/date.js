const moment = require("moment");

// Custom date calculation (for years and months)
const dateDiff = ({ startDate, endDate }) => {
  const firstDate = moment(startDate);
  const secondDate = moment(endDate);

  const yearsDiff = secondDate.diff(firstDate, "year");
  const firstDateYearsOffset = firstDate.add(yearsDiff, "years");
  const monthsDiff = secondDate.diff(firstDateYearsOffset, "months");

  // edge cases
  if (monthsDiff === 1 && yearsDiff === 0) {
    return "1 month";
  } else if (monthsDiff !== 1 && yearsDiff === 0) {
    return `${monthsDiff} months`;
  } else if (monthsDiff === 1 && yearsDiff !== 0) {
    return `${yearsDiff} years, 1 month`;
  } else {
    return `${yearsDiff} years, ${monthsDiff} months`;
  }
};

module.exports = { dateDiff };
