const form=document.getElementById('form')
const firstName=document.getElementById('fname')
const email=document.getElementById('email')
const password=document.getElementById('pwd')
const confirmPassword=document.getElementById('cpwd')
const errorElement=document.getElementById('error')
alert("please Enter the Valid Details..!")

form.addEventListener('submit',(e)=>{
        let message = []

        if (firstName.value == "" || firstName.value == null) {
            message.push("Name is Required..!")
        }
        if (email.value =="" || email.value == null) {
            message.push("Email is Required..!")
        }
        if (password.value =="" || password.value == null) {
            message.push("Password is Required..!")
        }
        if (password.value.lengt < 8) {
            message.push("Password is must be longer than 8 Characters..!")
        }
        if (password.value.lengt > 20) {
            message.push("Password is must be lesser than 20 Characters..!")
        }
        if (confirmPassword.value == "" || confirmPassword.value == null) {
            message.push("Confirm Password is Required.!")
        }
        if (password.value != confirmPassword.value) {
            message.push("Your Confirm Password doesn't match..!")
        }
        if (message.length > 0) {
            e.preventDefault()
            errorElement.innerHTML = message.join('')
        }
        


    })