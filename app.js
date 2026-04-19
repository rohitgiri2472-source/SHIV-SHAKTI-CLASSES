console.log("JS connected");
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let autoSlide;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
    resetAutoSlide();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;

  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active-dot"));

  slides[index].classList.add("active");
  dots[index].classList.add("active-dot");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
}

// Buttons
nextBtn.onclick = () => {
  nextSlide();
  resetAutoSlide();
};

prevBtn.onclick = () => {
  prevSlide();
  resetAutoSlide();
};

// AUTO SLIDE FUNCTION
function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 4000); // 4 sec
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Pause on hover
const sliderWrapper = document.querySelector(".slider-wrapper");

sliderWrapper.addEventListener("mouseenter", stopAutoSlide);
sliderWrapper.addEventListener("mouseleave", startAutoSlide);

// Init
updateSlider();
startAutoSlide();