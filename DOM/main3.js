const headElement = document.head

const headParentNode = headElement.parentNode
const headParentElement = headElement.parentElement

console.log(headParentNode);
console.log(headParentElement);

const headPreviousSibling = headElement.previousSibling
console.log(headPreviousSibling);

const headPreviousSiblingElement = headElement.previousElementSibling
console.log(headPreviousSiblingElement);

const headNextSibling = headElement.nextSibling
console.log(headNextSibling);

const headNextSiblingElement = headElement.nextElementSibling
console.log(headNextSiblingElement);

//get first child
console.log(headElement.firstChild);
console.log(headElement.firstElementChild);

//get last child
console.log(headElement.lastChild);
console.log(headElement.lastElementChild);