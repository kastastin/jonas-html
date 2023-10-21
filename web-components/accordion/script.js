const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  if (e.target.classList[0] === "icon") {
    e.target.parentElement.classList.toggle("open");
  }
});
