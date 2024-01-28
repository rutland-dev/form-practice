import "./style.css";

const myForm = document.querySelector("form");
myForm.addEventListener("submit", (event) => {
    event.preventDefault();
})

function checkEmail() {
    const testEmail = document.getElementById("email");
    const emailSpan =document.getElementById("email-span");

    if (testEmail.value === "") {
        console.log("no email");
        emailSpan.textContent = "An email address is required";
    } else if (!/^[A-Za-z0-9]{3,15}@[A-Za-z0-9]+.[A-Za-z]{2,5}$/.test(testEmail)) {
        console.log("invalid email");
        emailSpan.textContent = "Please enter a valid email address";
    } else {
        console.log("perfect");
        emailSpan.textContent = "";
    }
}

const email = document.getElementById("email");
email.addEventListener("blur", () => {
    checkEmail();
})