const container = document.getElementById("dashboardContainer");

// Get purchased courses
let purchased = JSON.parse(localStorage.getItem("courses")) || [];

if (purchased.length === 0) {
  container.innerHTML = "<p>No courses purchased yet.</p>";
} else {
  purchased.forEach((course, index) => {
    const div = document.createElement("div");
    div.classList.add("course-card");

    div.innerHTML = `
      <h2>${course}</h2>
      <p>Access your course content anytime</p>
      <button onclick="removeCourse(${index})">Remove</button>
    `;

    container.appendChild(div);
  });
}

// Remove course
function removeCourse(index) {
  purchased.splice(index, 1);
  localStorage.setItem("courses", JSON.stringify(purchased));
  location.reload();
}