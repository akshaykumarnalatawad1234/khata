const loginForm = document.getElementById("login-form");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginButton = document.getElementById("login-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.href = "file.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})