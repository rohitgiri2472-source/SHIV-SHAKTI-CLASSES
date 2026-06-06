// ======================
// SIGNUP
// ======================

async function signup() {

  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {

    const res = await fetch(
      "https://shiv-shakti-classes.onrender.com/api/auth/signup",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    alert(data.message);

    if (data.message === "Signup successful") {
      window.location.href = "login.html";
    }

  } catch (err) {

    console.log(err);
    alert("Error connecting to server");

  }
}

async function login() {

  const email =
    document.getElementById("loginEmail").value;

  const password =
    document.getElementById("loginPassword").value;

  try {

    const response = await fetch(
      "https://shiv-shakti-classes.onrender.com/api/auth/login",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          email,
          password
        })
      }
    );

    const data = await response.json();

    console.log(data);

    if (data.token) {

      // SAVE TOKEN
      localStorage.setItem(
        "token",
        data.token
      );

      // SAVE STUDENT NAME
      localStorage.setItem(
        "studentName",
        data.name
      );

      alert("Login Successful");

      // REDIRECT
      window.location.href =
        "dashboard.html";

    } else {

      alert(data.message);

    }

  } catch (error) {

    console.log(error);

    alert("Server Error");

  }

}