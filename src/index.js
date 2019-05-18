import './serviceWorker';
import './style.scss';
import * as iy from 'immensity';
import keyboardEventProps from './keyboardEventProps.json';

console.clear();

document.addEventListener('keydown', handleKeyboardEvent);
document.addEventListener('keydown', handleImmensityKeyboardEventKey);
document.addEventListener('keydown', handleImmensityKeyboardEventCode);

function handleKeyboardEvent(event) {
  console.log('event: ', event);
  event.preventDefault();

  const eventProps = document.querySelector('[data-js=event-props]');

  eventProps.innerHTML = keyboardEventProps.keys
    .map(
      prop => /* html */ `
    <tr>
      <td>${prop}</td>
      <td>${event[prop]}</td>
    </tr>
  `
    )
    .join('');

  document.querySelector('[data-js=event-content]').classList.remove('hidden');
}

function handleImmensityKeyboardEventKey(event) {
  const output = iy.handleKeyboardEvent()(event);

  const html = /* html */ `
    <strong>
      ${output}
    </strong>
  `;

  document.querySelector(
    '[data-js=immensity-keyboard-event-key]'
  ).innerHTML = html;
}

function handleImmensityKeyboardEventCode(event) {
  const output = iy.handleKeyboardEvent(
    {},
    { eventPropertyToGetKeyValue: 'code' }
  )(event);

  const html = /* html */ `
    <strong>
      ${output}
    </strong>
  `;

  document.querySelector(
    '[data-js=immensity-keyboard-event-code]'
  ).innerHTML = html;
}
