const dots = document.querySelectorAll(".dot"),
  slides = document.querySelectorAll(".slide"),
  carousel = document.querySelector(".carousel"),
  lastSlideIndex = slides.length - 1;

let currIndex = 0;

carousel.addEventListener("click", (e) => {
  const target = e.target;
  const clickedElemClass = target.classList.value;

  if (clickedElemClass.includes("left")) {
    changeSlide(() => changeCurrIndex(() => currIndex--));
  }

  if (clickedElemClass.includes("right")) {
    changeSlide(() => changeCurrIndex(() => currIndex++));
  }

  if (clickedElemClass === "dot") {
    changeSlide(() => (currIndex = [...dots].indexOf(target)));
  }
});

function changeSlide(setCurrIndex) {
  toggleActiveClasses();
  setCurrIndex();
  toggleActiveClasses();
}

function toggleActiveClasses() {
  dots[currIndex].classList.toggle("dot-active");
  slides[currIndex].classList.toggle("slide-active");
}

function changeCurrIndex(operation) {
  operation();

  // Check index boundaries
  if (currIndex > lastSlideIndex) currIndex = 0;
  if (currIndex < 0) currIndex = lastSlideIndex;
}

// Auto switching slider
setInterval(() => {
  changeSlide(() => changeCurrIndex(() => currIndex++));
}, 5000);
