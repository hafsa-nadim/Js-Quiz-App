const USERNAME = "jsstudent";
const PASSWORD = "12345";

function login() {
  var u = document.getElementById("username").value;
  var p = document.getElementById("password").value;

  if (u === USERNAME && p === PASSWORD) {
    window.location.href = "quiz.html";
  } else {
    document.getElementById("error").innerText =
      "❌ Invalid username or password";
  }
}
