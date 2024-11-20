function switchForm(formType) {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (formType == "login") {
    loginForm.classList.remove("hidden");
    loginForm.classList.add("active");
    registerForm.classList.add("hidden");
    registerForm.classList.remove("active");
  } else if (formType == "register") {
    registerForm.classList.remove("hidden");
    registerForm.classList.add("active");
    loginForm.classList.add("hidden");
    loginForm.classList.remove("active");
  }
}
