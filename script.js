const mainForm = document.forms['mainForm']
const inputs = mainForm.querySelectorAll("input");
const password = document.getElementById("password");
const passConfirm = document.getElementById("passConfirm");
const email = document.getElementById("email");
const country = document.getElementById("country");

//Prevents page refresh upon clicking submit
mainForm.addEventListener("submit", (e) => e.preventDefault());

//Changes the "validation" border as the user adds input
inputs.forEach((input) => input.addEventListener("input", () => changeBorder(input)))

//Reports validity when user clicks away from input
inputs.forEach((input) => input.addEventListener("blur", () => input.reportValidity()))

//Checks if both passwords match as user types
passConfirm.addEventListener("input", () => passwordsMatch())

//Custom message for email
email.addEventListener("input",function(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Email must be in the format [example@website.com].")
        email.reportValidity();
    } else {
        email.setCustomValidity("")
    }
})

//Custom message for Country
country.addEventListener("input",function(event) {
    if (country.validity.valueMissing) {
        country.setCustomValidity("Field must not be left blank.")
        country.reportValidity();
    } else {
        country.setCustomValidity("")
    }
})

//Custom message for Password
password.addEventListener("input",function(event) {
    if (password.validity.patternMismatch) {
        password.setCustomValidity("Password must be 8-16 characters in length.")
        password.reportValidity();
    } else {
        password.setCustomValidity("")
    }
})

//Changes the color of the input depending on validity as input is entered.
function changeBorder(input) {
    if (input.checkValidity()) {
        input.classList.remove("invalid")
        input.classList.add("valid")
    } else {
        input.classList.remove("valid")
        input.classList.add("invalid")
    } 
}

//Checks matching passwords
function passwordsMatch() {
    if (password.value !== passConfirm.value) {
        passConfirm.classList.remove("valid")
        passConfirm.classList.add("invalid")
        passConfirm.setCustomValidity("Passwords do not match.")
    } else {
        passConfirm.classList.remove("invalid")
        passConfirm.classList.add("valid")
    }
}