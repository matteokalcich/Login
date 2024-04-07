const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function login() {
  var username = "admin";
  var password = "admin";

  var user = document.getElementById("username_field").value;
  var pass = document.getElementById("password_field").value;

  if ("admin" == user && "admin" == pass) {
    alert("Username e password corretti");
  } else {
    window.location.assign("https://www.youtube.com/");
  }
}
