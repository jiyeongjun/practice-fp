import { pipe, map, filter, tap, identity } from 'fxjs';

function getChildParents(strings, ...values) {
  const htmlString = [...strings].join('');

  const container = document.createElement('div');
  container.innerHTML = htmlString;

  const childElements = values.map((child) => container.querySelector(`[data-placeholder='${child}']`)).filter(Boolean);

  const parentElements = childElements.map((childElement) => childElement.parentElement);

  return parentElements;
}

export default getChildParents;


