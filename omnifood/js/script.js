// <-- Set current year -->
const yearEl = document.querySelector(".year"),
  currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

// <-- Mobile navigation -->
const headerEl = document.querySelector(".header");

headerEl.addEventListener("click", (e) => {
  // available icon names: menu-outline, close-outline
  const clickedElName = e.target.name?.split("-")[0];
  const clickedElTagName = e.target.tagName;

  const isLinkClicked = clickedElTagName === "A";
  const isIconClicked = ["menu", "close"].includes(clickedElName);

  if (isLinkClicked || isIconClicked) {
    headerEl.classList.toggle("nav-open");
    document.body.classList.toggle("hidden-overflow");
    document.documentElement.classList.toggle("hidden-overflow");
  }
});

// <-- Smooth scrolling animation -->
const linkElems = document.querySelectorAll("a:link");

linkElems.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const linkHref = link.getAttribute("href");

    if (linkHref === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (linkHref.startsWith("#") && linkHref !== "#") {
      const sectionEl = document.querySelector(linkHref);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  })
);

// <-- Sticky navigation -->
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];

    entry.isIntersecting
      ? document.body.classList.remove("sticky")
      : document.body.classList.add("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);

// <-- Fixing flexbox gap -->
(function () {
  const flex = document.createElement("div");
  
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
})();
