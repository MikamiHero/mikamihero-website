const orderBy = require("lodash.orderby");

const sortDescByKey = ({ objArr, key }) => orderBy(objArr, [key], ["desc"]);

const makeTimeLookPretty = ({ timeInSeconds }) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const remainingTimeInSeconds = timeInSeconds % 3600;
  const minutes = Math.floor(remainingTimeInSeconds / 60);
  const seconds = remainingTimeInSeconds % 60;

  const finalMinutes = minutes < 10 ? stringPadLeft({ string: minutes, pad: "0", length: 2 }) + "m " : minutes + "m ";
  const finalSeconds = seconds < 10 ? stringPadLeft({ string: seconds, pad: "0", length: 2 }) + "s" : seconds + "s";
  const finalTime = hours !== 0 ? hours + "h " + finalMinutes + finalSeconds : finalMinutes + finalSeconds;

  return finalTime;
};

const addSuffixToNumber = ({ number }) => {
  const numToText = number.toString();
  const lastTwoChar = numToText.slice(-2);
  const lastChar = numToText.slice(-1);
  const lastDigit = +lastChar;
  const lastTwoDigits = +lastTwoChar;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return numToText + "st";
  } else if (lastDigit === 2 && lastTwoDigits !== 12) {
    return numToText + "nd";
  } else if (lastDigit === 3 && lastTwoDigits !== 13) {
    return numToText + "rd";
  }
  return numToText + "th";
};

const stringPadLeft = ({ string, pad, length }) => (new Array(length + 1).join(pad) + string).slice(-length);

module.exports = { sortDescByKey, makeTimeLookPretty, addSuffixToNumber };
