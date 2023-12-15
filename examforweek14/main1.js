const background = document.querySelector('body')
const colorInput = document.getElementById('your_color')
const sizeText = document.getElementById('select_front')
const submit = document.getElementById('submit')

colorInput.addEventListener('input' , (e) => {
    let colorInputCode = colorInput.value
    background.style.backgroundColor = colorInputCode
    localStorage.setItem('colorInputCode' , colorInputCode)

})

submit.addEventListener('click' , (e) => {
    let fontSize = sizeText.value
    background.style.fontSize = fontSize + 'px'
    localStorage.setItem('fontSize' , fontSize)
})

sizeText.addEventListener('change' , (e) => {
    let fontSize = sizeText.value
    background.style.fontSize = fontSize + 'px'
    localStorage.setItem('fontSize' , fontSize)
})

window.addEventListener('load' , (e) => {
    let colorInputCode = localStorage.getItem('colorInputCode')
    background.style.backgroundColor = colorInputCode
    let fontSize = localStorage.getItem('fontSize')
    background.style.fontSize = fontSize + 'px'
})
