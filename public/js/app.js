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
const EVENT_TYPE_KEYUP = 'keyup';
const EVENT_TYPE_KEYDOWN = 'keydown';

const getMinutesAsMilliseconds = (min) => min * oneMinuteInMilliseconds;
const getSecondsAsMilliseconds = (seconds) => seconds * oneSecondInMilliseconds;

function timeToMilliseconds(minutes, seconds) {
  const minutesInMilliseconds = getMinutesAsMilliseconds(minutes);
  const secondsInMilliseconds = getSecondsAsMilliseconds(seconds);

  return minutesInMilliseconds + secondsInMilliseconds;
}

function initCopyText() {
  var copyText = millisecondsDisplayElement;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById('myTooltip');
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outCopy() {
  var tooltip = document.getElementById('myTooltip');
  tooltip.innerHTML = "Copy to clipboard";
}

function debounce(fn, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { fn.apply(this, args) }, timeout);
  };
}

function setMillisecondsUIResult() {
  const mins = minutesInput.value;
  const secs = secondsInput.value;
  millisecondsDisplayElement.value = timeToMilliseconds(mins, secs);
}

function autoTab(event) {
  const maxLength = 2;
  const emptyValue = 0;
  const { key } = event;
  const backspaceKey = 'Backspace';
  const isBackspaceKeyPress = key === backspaceKey;
  if (isBackspaceKeyPress) {
    const hasInputZeroLengthValue = secondsInput.value.length === emptyValue;
    if (hasInputZeroLengthValue) {
      minutesInput.focus();
    }
  } else {
    const hasInputMaxLength = minutesInput.value.length === maxLength;
    if (hasInputMaxLength) {
      secondsInput.focus();
    }
  }
}

window.addEventListener(EVENT_TYPE_KEYDOWN, debounce((event) => autoTab(event), 0));
window.addEventListener(EVENT_TYPE_KEYUP, debounce(() => setMillisecondsUIResult(), DEBOUNCE_TIME));




// TODO:
// Add validations on inputs, no more than 60 as input value
// Auto tab from minutes to seconds on typing
// Auto tab from seconds to minutes when deleting