const mainForm = document.forms['mainForm']
const inputs = mainForm.querySelectorAll("input");
const password = document.getElementById("password");
const passConfirm = document.getElementById("passConfirm");

mainForm.addEventListener("submit", (e) => e.preventDefault());
inputs.forEach((input) => input.addEventListener("input", () => changeBorder(input)))
inputs.forEach((input) => input.addEventListener("blur", () => input.reportValidity()))
passConfirm.addEventListener("input", () => passwordsMatch())

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