// Good luck on JING write your code here
// 1.
const rainButton = document.getElementById('color-btn')
const bgRainBow = document.getElementById('rainbow')
rainButton.addEventListener('click' , (e) => {
    const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
    const randomColor = Math.floor(Math.random() * colorArray.length)
    bgRainBow.style.backgroundColor = colorArray[randomColor]
    localStorage.setItem('color',colorArray[randomColor])
})

// 2.
const addButton = document.getElementById('add-btn')
const ulEle = document.querySelector('div#listItem>ul')
const inputBackpack = document.getElementById('item-input')
addButton.addEventListener('click' , (e) => {
    const userInput = inputBackpack.value
    const liEle = document.createElement('li')
    liEle.textContent = userInput
    ulEle.appendChild(liEle)
})
// 3.
const form = document.querySelector('section#input-list>form')
const error = form.children[0]
const inputUsername = form.children[1]
const inputEmail = form.children[2]
const inputPassword = form.children[3]
const submitButton = document.getElementById('submit-btn')
submitButton.addEventListener('click' , (e) => {
    e.preventDefault()
    const userInputName = inputUsername.value
    const userInputEmail = inputEmail.value
    const userInputPassword = inputPassword.value
    if(userInputName.length <=0){
        error.textContent = 'มึงลืมใส่ชื่อครับ'
    }
    if(userInputEmail.length <= 0){
        console.log('error email');
        const errormsg = error.textContent
        error.textContent = `${errormsg} มึงลืมใส่อีเมลครับพี่`
    }
    if(userInputPassword.length <= 0){
        console.log('error password');
        const errormsg = error.textContent
        console.log(errormsg);
        error.textContent = `${errormsg} มึงลืมใส่รหัสครับพี่`
    }
    if(userInputName.length > 0 && userInputEmail.length > 0 && userInputPassword.length > 0){
        error.textContent = 'Successfully'
        console.log(userInputName);
        console.log(userInputEmail);
        console.log(userInputPassword);
    }
})
window.addEventListener('load',() => {
    let bgcolor = localStorage.getItem('color')
    bgRainBow.style.backgroundColor = bgcolor
})