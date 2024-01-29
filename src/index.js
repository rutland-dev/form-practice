import "./style.css";

function checkEmail() {
    const testEmail = document.getElementById("email");
    const emailSpan =document.getElementById("email-span");

    if (testEmail.value === "") {
        testEmail.setCustomValidity("An email address is required");
    } else if (!/^[A-Za-z0-9-.]{3,15}@[A-Za-z0-9]+.[A-Za-z]{2,5}$/.test(testEmail.value)) {
        testEmail.setCustomValidity("Please enter a valid email address");
        emailSpan.textContent = "";
    } else {
        testEmail.setCustomValidity("");
    }
    emailSpan.textContent = testEmail.validationMessage;
}

function checkCountry() {
    const testCountry = document.getElementById("country");
    const countrySpan = document.getElementById("country-span");

    if (testCountry.value === "") {
        testCountry.setCustomValidity("A country is required");
    } else if (!/^[A-Za-z]{3,20}$/.test(testCountry.value)) {
        testCountry.setCustomValidity("Please enter a valid country");
    } else {
        testCountry.setCustomValidity("");
    }
    countrySpan.textContent = testCountry.validationMessage;
}

function checkZip() {
    const zipCode = document.getElementById("zip-code");
    const zipSpan = document.getElementById("zip-code-span");

    if (zipCode.value === "") {
        zipCode.setCustomValidity("Zip code required");
    } else if (!/^[0-9]{5}$/.test(zipCode.value)) {
        zipCode.setCustomValidity("Please enter a valid zip code");
    } else {
        zipCode.setCustomValidity("");
    }
    zipSpan.textContent = zipCode.validationMessage;
}

function checkPassword() {
    const testPassword = document.getElementById("password");
    const passwordSpan = document.getElementById("password-span");

    if (testPassword.value === "") {
        testPassword.setCustomValidity("A password is required");
    } else if (!/^[A-Za-z0-9]{8,20}$/.test(testPassword.value)) {
        testPassword.setCustomValidity("Password must be between 8 and 20 characters");
    } else {
        testPassword.setCustomValidity("");
    }
    passwordSpan.textContent = testPassword.validationMessage;
}

function checkPasswordConfirm() {
    const testPasswordConfirm = document.getElementById("password-confirm");
    const passwordConfirmSpan = document.getElementById("password-confirm-span");
    const testPassword = document.getElementById("password");

    if (testPasswordConfirm.value === "") {
        testPasswordConfirm.setCustomValidity("You must confirm your password");
    } else if (!(testPasswordConfirm.value === testPassword.value)) {
        testPasswordConfirm.setCustomValidity("Must match password");
    } else {
        testPasswordConfirm.setCustomValidity("");
    }
    passwordConfirmSpan.textContent = testPasswordConfirm.validationMessage;
}

const email = document.getElementById("email");
email.addEventListener("blur", () => {
    checkEmail();
})

const country = document.getElementById("country");
country.addEventListener("blur", () => {
    checkCountry();
})

const zip = document.getElementById("zip-code");
zip.addEventListener("blur", () => {
    checkZip();
})

const password = document.getElementById("password");
password.addEventListener("blur", () => {
    checkPassword();
})

const passwordConfirm = document.getElementById("password-confirm");
passwordConfirm.addEventListener("blur", () => {
    checkPasswordConfirm();
})

const submitButton = document.getElementById("submit");
const myForm = document.getElementById("this-form");
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const formValidationSpan = document.getElementById("form-validation-span");
    const allFields = document.querySelectorAll("input");
    const fieldArray = Array.from(allFields)
    function checkForm(input) {
        if (input.checkValidity()) {
            return true
        }
        return false;
    }
    if (!(fieldArray.every(checkForm))) {
        formValidationSpan.textContent = "Invalid fields present";
    } else {
        formValidationSpan.textContent = "Great Job!";
        myForm.reset();
    }
})

const cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", () => {
    myForm.reset();
})