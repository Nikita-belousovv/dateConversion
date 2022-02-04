const dateConversion = (date) => {
  const localTimeZone = new Date().getTimezoneOffset();
  const serverTimeZone = 0;
  const hour = Number(date.slice(11, 13)) * 60;
  const minutes = Number(date.slice(14, 17));
  const maxNumbOfMinutes = 1440;
  const sumTime = hour + minutes;
  const dateMonthYear = date.slice(0, 11);
  let sumLocalTime = serverTimeZone < localTimeZone ? sumTime - localTimeZone : sumTime + Math.abs(localTimeZone);
  if (sumLocalTime <= maxNumbOfMinutes) sumLocalTime = maxNumbOfMinutes + sumLocalTime;
  if (sumLocalTime >= maxNumbOfMinutes) sumLocalTime -= maxNumbOfMinutes;
  if (!Number.isInteger(sumLocalTime)) sumLocalTime = parseInt("", sumLocalTime);
  const convertedHours = Math.trunc(sumLocalTime / 60);
  let convertedMinutes = sumLocalTime % 60;
  if (convertedMinutes < 10) convertedMinutes = `0${convertedMinutes}`;
  const finalLocalTime = `${dateMonthYear + convertedHours}:${convertedMinutes}`;

  return finalLocalTime;
};
