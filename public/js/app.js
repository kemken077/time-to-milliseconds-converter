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
const DEBOUNCE_TIME = 1000;
const EVENT_TYPE = 'keyup';

const getMinutesAsMilliseconds = (min) => min * oneMinuteInMilliseconds;
const getSecondsAsMilliseconds = (seconds) => seconds * oneSecondInMilliseconds;

function timeToMilliseconds(minutes, seconds) {
  const minutesInMilliseconds = getMinutesAsMilliseconds(minutes);
  const secondsInMilliseconds = getSecondsAsMilliseconds(seconds);

  return minutesInMilliseconds + secondsInMilliseconds;
}


window.addEventListener(EVENT_TYPE, _.debounce(() => {
  const mins = minutesInput.value;
  const secs = secondsInput.value;
  millisecondsDisplayElement.innerText = timeToMilliseconds(mins, secs);
}, DEBOUNCE_TIME));