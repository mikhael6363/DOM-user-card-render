/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.ClassNames - css classes
 * @param {function} options.onClick - click handler
 * @param {object} options.attributes
 * @param {Node[]} children
 * @return {HTMLElement}
 */
function createElement(
  type,
  { classNames = [], onClick, attributes = {} } = {},
  ...children
) {
  const element = document.createElement(type);
  element.classList.add(...classNames);
  element.onclick = onClick;
  for (const [attrName, attrValue] of Object.entries(attributes)) {
    element.setAttribute(attrName, attrValue);
  }
  element.append(...children);
  return element;
}