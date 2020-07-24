console.log("My client side javascript file is saying hello world!!")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = "Loading..."
    messageTwo.textContent = ''
<<<<<<< HEAD
    fetch('/weather?address=' + location).then((response) => {
=======
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
>>>>>>> a5b04e832100ce010a1ebe454808ad1a0553c3ab
    response.json().then((data) => {
        if(data.error) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location 
            messageTwo.textContent = data.forecast
        }
    })
})
})