const courses = [
  { name: "Class 2", price: 999 },
  { name: "Class 3", price: 999 },
  { name: "Class 4", price: 1099 },
  { name: "Class 5", price: 1199 },
  { name: "Class 6", price: 1299 },
  { name: "Class 7", price: 1399 },
  { name: "Class 8", price: 1499 },
];

const container = document.getElementById("courseContainer");

courses.forEach(course => {
  const div = document.createElement("div");
  div.classList.add("course-card");

  div.innerHTML = `
    <h2>${course.name}</h2>
    <p>Complete syllabus with expert teachers</p>
    <div class="price">₹${course.price}</div>
    <button onclick="buyCourse('${course.name}')">Buy Now</button>
  `;

  container.appendChild(div);
});

function buyCourse(name) {
  let purchased = JSON.parse(localStorage.getItem("courses")) || [];

  if (!purchased.includes(name)) {
    purchased.push(name);
    localStorage.setItem("courses", JSON.stringify(purchased));
    alert(name + " purchased!");
  } else {
    alert("Already purchased!");
  }
}