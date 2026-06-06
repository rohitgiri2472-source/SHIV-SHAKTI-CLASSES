const form = document.getElementById("adminLoginForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {

    const response = await fetch("https://shiv-shakti-classes.onrender.com/api/admin/login", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        email,
        password
      })

    });

    const data = await response.json();

    if (data.success) {

        localStorage.setItem("admin", "true");

      window.location.href = "admin-dashboard.html";

    } else {

      alert(data.message);

    }

  } catch (error) {

    console.log(error);

  }

});