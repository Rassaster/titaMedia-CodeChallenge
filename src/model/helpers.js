export const addClass = (element, className) => {
  element.classList.add(className);
  return null;
}
export const removeClass = (element, className) => {
  element.classList.remove(className);
  return null;
}
export const createDOMElement = (tagName, class1, class2, class3) => {
  let newElement = document.createElement(tagName);
  newElement.classList.add(class1);
  newElement.classList.add(class2);
  newElement.classList.add(class3);
  return newElement;
}