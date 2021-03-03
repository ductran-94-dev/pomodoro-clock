export const formatTime = timeLeftInSecond => {
  let minute = Math.floor(timeLeftInSecond / 60);
  if (minute < 10) minute = `0${minute}`;

  let second = timeLeftInSecond - 60 * minute;
  if (second < 10) second = `0${second}`;

  return `${minute}:${second}`;
};
