document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("signin_btn").addEventListener('click', function() {
    authentication();
  });

  function authentication() {
    var login_email = document.getElementById("login_email").value;
    var login_password = document.getElementById("login_password").value;
    let stored_email = localStorage.getItem('email');
    let stored_password = localStorage.getItem('password');
    if (login_email === stored_email && login_password === stored_password) {
      alert("You are logged in.");
    } else {
      alert("Invalid email or password.");
    }
  }
});