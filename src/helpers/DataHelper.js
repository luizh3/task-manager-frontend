function isValid(dateString) {
  if (!dateString) {
    return false;
  }

  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
}

function daysToDate(first, second) {
  console.log(first, second);
  if (!isValid(first) || !isValid(second)) {
    return null;
  }

  const firstDate = new Date(first);
  const secondData = new Date(second);

  const differenceInMilliseconds = firstDate - secondData;

  const nrMilleseconds = 1000;
  const nrSedondsMinute = 60;
  const nrMinutesHour = 60;
  const nrHourOneDay = 24;

  const millisecondsInOneDay =
    nrMilleseconds * nrSedondsMinute * nrMinutesHour * nrHourOneDay;
  const differenceInDays = differenceInMilliseconds / millisecondsInOneDay;

  return Math.floor(differenceInDays);
}

export default {
  daysToDate,
  isValid,
};
