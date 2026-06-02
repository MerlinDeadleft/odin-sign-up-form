let signUpForm = document.querySelector("#sign-up-form");
let loginButton = document.querySelector("#login-button");

//main
signUpForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for trying to sign up!\nUnfortunately this is not a real service and your request will not be fullfilled!");

    return false;
});

loginButton.addEventListener("click", e => {
    e.preventDefault();
    alert("This is not a real service!\nTherefore there is no login page!");
});