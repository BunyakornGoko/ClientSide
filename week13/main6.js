const userElement = document.getElementById('input-user')
const pswElement = document.getElementById('input-psw')
userElement.addEventListener('focus', () =>{
    console.log('Your focus is on username');
})
userElement.addEventListener('blur' , () => {
    console.log('Your username input text is blured');
})

userElement.addEventListener('keydown' , (e) => {
    console.log(`${e.key} , ${e.code}`);
    if(e.key >= 0 && e.key <=9){
        e.preventDefault()
    }
})

userElement.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        const pElement = document.querySelector('p')
        pElement.textContent = e.target.value
    }
})

userElement.addEventListener('input' , (e) => {
    const pElement = document.querySelector('p')
    pElement.textContent = e.target.value
})