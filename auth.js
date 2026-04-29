// SIGNUP
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  const user = { email, password };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful!");
  window.location.href = "login.html";
}


// LOGIN
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No account found. Please signup first.");
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password");
  }
}