const track = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide");

let index = 0;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").onclick = () => {
  index = (index + 1) % slides.length;
  updateSlider();
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
};

// Auto slide
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
}, 3000);