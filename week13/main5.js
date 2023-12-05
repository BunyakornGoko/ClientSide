const userElement = document.getElementById('input-user')
const pswElement = document.getElementById('input-psw')
userElement.addEventListener('focus', () =>{
    console.log('Your focus is on username');
})
userElement.addEventListener('blur' , () => {
    console.log('Your username input text is blured');
})

userElement.addEventListener('keypress' , (e) => {
    console.log(`${e.key} , ${e.code}`);
    if(e.key >= 0 && e.key <=9){
        e.preventDefault()
    }
})