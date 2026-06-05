// =========================
// CHECK LOGIN
// =========================

const token = localStorage.getItem("token");

if (!token) {

  alert("Please login first");

  window.location.href = "login.html";

}



// =========================
// GET USER DATA
// =========================

const student =
  JSON.parse(localStorage.getItem("student"));



// =========================
// SHOW STUDENT NAME
// =========================

if (student && student.name) {

  const welcome =
    document.getElementById("welcomeName");

  const studentName =
    document.getElementById("studentName");

  if (welcome) {

    welcome.innerHTML =
      `Welcome, ${student.name} 👋`;

  }

  if (studentName) {

    studentName.innerHTML =
      student.name;

  }

}



// =========================
// PURCHASED COURSES
// =========================

const container =
  document.getElementById("dashboardContainer");

let purchased =
  JSON.parse(localStorage.getItem("courses")) || [];



if (purchased.length === 0) {

  container.innerHTML = `

    <div class="empty-course">

      <i class="fas fa-book-open"></i>

      <h3>No Courses Purchased Yet</h3>

      <p>
        Explore courses and start learning today.
      </p>

    </div>

  `;

} else {

  purchased.forEach((course, index) => {

    const div =
      document.createElement("div");

    div.classList.add("student-course-card");



    div.innerHTML = `

      <div class="course-top">

        <i class="fas fa-graduation-cap"></i>

      </div>

      <h2>${course}</h2>

      <p>
        Access your course anytime
        and continue learning.
      </p>

      <button onclick="removeCourse(${index})">

        Remove Course

      </button>

    `;

    container.appendChild(div);

  });

}

// =========================
// REMOVE COURSE
// =========================

function removeCourse(index) {

  purchased.splice(index, 1);

  localStorage.setItem(
    "courses",
    JSON.stringify(purchased)
  );

  location.reload();

}

// =========================
// LOGOUT
// =========================

function logout() {

  localStorage.removeItem("token");

  localStorage.removeItem("student");

  alert("Logged out successfully");

  window.location.href = "login.html";

}