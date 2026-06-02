let signUpForm = document.querySelector("#sign-up-form");

//main
signUpForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for trying to sign up!\nUnfortunately this is not a real service and your request will not be fullfilled!");

    return false;
});