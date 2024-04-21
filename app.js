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

    alert("Prova");
    window.location.replace("http://www.w3schools.com");
    if(window.location == "https://www.youtube.com") {

      alert("Sei su youtube");

    } else if(window.location == "http://127.0.0.1:8080/?"){

      alert("Sei ancora nel login");
    } else {

      alert("Non so dove tu sia");
    }
  }
}
