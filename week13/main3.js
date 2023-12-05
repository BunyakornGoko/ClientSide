const submitButton = document.querySelector('button')
submitButton.addEventListener('click',(e) => {
    e.preventDefault()
    const allInputElements = document.querySelectorAll('input')
    console.log(allInputElements);

    const isComplete = Array.from(allInputElements).every((input) => input.value.length > 0)

    const pElement = document.getElementsByTagName('p')[0]
    if(isComplete){
        pElement.textContent = 'Your input are complete'
    } else {
        pElement.textContent = 'Missing some value, please enter'
    }
})