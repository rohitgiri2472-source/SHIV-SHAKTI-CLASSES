// =========================
// ADMIN PROTECTION
// =========================

const admin =
  localStorage.getItem("admin");

if (!admin) {

  alert("Access Denied");

  window.location.href =
    "admin-login.html";
}

// =========================
// FETCH USERS
// =========================

async function fetchUsers() {

  try {

    const response =
      await fetch("https://shiv-shakti-classes.onrender.com/api/admin/users");

    const users = await response.json();

    const table =
      document.getElementById("usersTable");

    table.innerHTML = "";

    users.forEach(user => {

      table.innerHTML += `

        <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
        </tr>

      `;

    });

  } catch (error) {

    console.log(error);

  }

}

// =========================
// FETCH STUDENTS
// =========================

async function fetchStudents() {

  try {

    const response =
      await fetch("https://shiv-shakti-classes.onrender.com/api/admin/students");

    const students = await response.json();

    const table =
      document.getElementById("studentsTable");

    table.innerHTML = "";

    students.forEach(student => {

      table.innerHTML += `

        <tr>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.className}</td>
        </tr>

      `;

    });

  } catch (error) {

    console.log(error);

  }

}

// =========================
// LOGOUT
// =========================

function logout() {

  window.location.href =
    "admin-login.html";

}

// =========================
// AUTO LOAD
// =========================

fetchUsers();
fetchStudents();