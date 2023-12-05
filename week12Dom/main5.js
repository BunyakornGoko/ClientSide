//CRUD on any element node 
//1.create element
const newLiEle = document.createElement('li')

//2.create attribute <li class = "devops" name = "devopsLect"></li>
newLiEle.setAttribute('class','devops')
newLiEle.setAttribute('name','devopsLect')

//3.add text value to element
newLiEle.innerHTML = '<span style = "color:red">Siam Yamsangsung</span>'

//4.add new li element to a parent
const divParent = document.querySelector('div.lecturers > ul')
console.log(divParent);
// divParent.appendChild(newLiEle)
const liEle = document.querySelectorAll('div.lecturers > ul > li')
console.log(liEle);
const refNode = liEle[1]
console.log(refNode);

// divParent.insertBefore(newLiEle , refNode)
// divParent.replaceChild(newLiEle , refNode)
divParent.removeChild(refNode)