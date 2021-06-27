const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");

const small1 = document.querySelector(".small1");
const small2 = document.querySelector(".small2");
const small31 = document.querySelector(".small3-1");
const small32 = document.querySelector(".small3-2");
const small4 = document.querySelector(".small4");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

handleform = event => {
    event.preventDefault();
    validateInputs();
}

validateInputs = () => {
    if(firstName.value === "" || firstName.value == null) {
        error1.classList.add("d-block");
        small1.classList.add("d-block");
        firstName.style.border = "2px solid hsl(0, 100%, 74%)";
        firstName.placeholder = "";
    } else {
        error1.classList.remove("d-block");
        small1.classList.remove("d-block");
        firstName.style.border = "1px solid hsl(246, 25%, 77%)";
        firstName.placeholder = "First Name";
    }
    if(lastName.value === "" || lastName.value == null) {
        error2.classList.add("d-block");
        small2.classList.add("d-block");
        lastName.style.border = "2px solid hsl(0, 100%, 74%)";
        lastName.placeholder = "";
    } else {
        error2.classList.remove("d-block");
        small2.classList.remove("d-block");
        lastName.style.border = "1px solid hsl(246, 25%, 77%)";
        lastName.placeholder = "Last Name";
    }
    if(email.value === "" || email.value == null) {
        error3.classList.add("d-block");
        small31.classList.add("d-block");
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        email.placeholder = "";
    }else if (!email.value.match(emailRegex)) {
        error3.classList.add("d-block");
        small32.classList.add("d-block");
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        email.style.color = "hsl(0, 100%, 74%)";
    }  else {
        error3.classList.remove("d-block");
        small31.classList.remove("d-block");
        small32.classList.remove("d-block");
        email.style.border = "1px solid hsl(246, 25%, 77%)";
        email.style.color = "hsl(249, 10%, 26%)";
        email.placeholder = "Email";
    }
    if(password.value === "" || password.value == null) {
        error4.classList.add("d-block");
        small4.classList.add("d-block");
        password.style.border = "2px solid hsl(0, 100%, 74%)";
        password.placeholder = "";
    } else {
        error4.classList.remove("d-block");
        small4.classList.remove("d-block");
        password.style.border = "1px solid hsl(246, 25%, 77%)";
        password.placeholder = "Password";
    }
}