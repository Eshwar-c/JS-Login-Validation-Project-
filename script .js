function validatePassword(password) {
  const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return pattern.test(password);
}

document.getElementById("form").addEventListener('submit', function(event) {
  event.preventDefault();

  const password = document.getElementById("password").value.trim();
  const repeatedPassword = document.getElementById("repeated_password").value.trim();

  if (!validatePassword(password)) {
    alert('The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    return;
  }

  if (password !== repeatedPassword) {
    alert("Your passwords do not match.");
    return;
  }

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;


  localStorage.setItem("email", email);
  localStorage.setItem("name", name);
  localStorage.setItem("dob", dob);
  localStorage.setItem("password", password);

  let storage= localStorage.getItem("name");
  let storage1= localStorage.getItem("password");
  console.log(storage);
  console.log(storage1);


  alert('Form submitted successfully');
});
