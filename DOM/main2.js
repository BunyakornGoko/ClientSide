const headElement = document.head
console.log(headElement);

//1.childNode = (Nodelist data type)query children with all node types
const headChildren = headElement.childNodes
console.log(headChildren);

headChildren.forEach((hc)=> {
    console.log(hc.nodeName);
    console.log(hc.nodeType);
    console.log(hc.nodeValue);
})
//2. children (HTMLCollection data type) = query children wiht ELEMENT type only
//convert array-like to array before using foreach function
console.log('length:', headElement.children.length)
Array.from(headElement.children).forEach((hc)=> {
    console.log(hc.nodeName);
    console.log(hc.nodeType);
    console.log(hc.nodeValue);
})

