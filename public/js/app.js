/**
 *
 *
 * 1 minute = 60000 milliseconds
 * 1 second = 1000 milliseconds
 *
 */
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const millisecondsDisplayElement = document.getElementById('milliseconds');
const oneMinuteInMilliseconds = 60000;
const oneSecondInMilliseconds = 1000;

const getMinutesAsMilliseconds = (min) => min * oneMinuteInMilliseconds;
const getSecondsAsMilliseconds = (seconds) => seconds * oneSecondInMilliseconds;

function timeToMilliseconds(minutes, seconds) {
  const minutesInMilliseconds = getMinutesAsMilliseconds(minutes);
  const secondsInMilliseconds = getSecondsAsMilliseconds(seconds);

  return minutesInMilliseconds + secondsInMilliseconds;
}
