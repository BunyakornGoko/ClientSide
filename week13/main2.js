//1. select target HTML object
const submitButton = document.querySelector('button')
// console.log(submitButton)
// 2 register handler function on a target HtML object
const doSomething = (e) => {
    console.log(`hello , ${e.target.id}`);
  }
submitButton.addEventListener('click', doSomething)

submitButton.addEventListener('click', (e) => {
    console.log(`Goodbye , ${e.target.id}`);
})

submitButton.removeEventListener('click', doSomething)
