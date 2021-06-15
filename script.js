function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(input_str) 
{
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(input_str);
}



const resetElm = (elm) =>{
     elm.classList.remove('invalid')
      elm.nextElementSibling.classList.add('hidden')
}

const invalidateElm = (elm) =>{
       elm.nextElementSibling.classList.remove('hidden')
        elm.classList.add('invalid')
}



let isFormValid = false;

const validateinupt = () =>{ 
    isFormValid = true;
    resetElm(nameInput);
    resetElm(emailInput)
    resetElm(numberInput)
    resetElm(message)

    if(!nameInput.value){
     invalidateElm(nameInput)
    isFormValid = false;
    }

    if(!message.value){
     invalidateElm(message)
    isFormValid = false;
    }


    
     if(!validateEmail(emailInput.value)){
     invalidateElm(emailInput)
    isFormValid = false;
    }
     if(!validatePhoneNumber(numberInput.value)){
     invalidateElm(numberInput)
    isFormValid = false;
    }
}
const message = document.getElementById('message')
const numberInput = document.querySelector('input[name="number"]')
const nameInput = document.querySelector('input[name="name"]')
const emailInput = document.querySelector('input[name="email"]')
const form = document.querySelector('form')
const thankyou = document.getElementById('thankyou')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log(nameInput)
    validateinupt()

    if(isFormValid){
        form.remove()
        thankyou.classList.remove('hidden')
    }
})

nameInput.addEventListener("input",()=>{
    validateinupt()
})

emailInput.addEventListener("input",()=>{
    validateinupt()
})





