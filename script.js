window.addEventListener("load", () => {
  AOS.init({
    once: true,
    duration: 600,
    offset: 50,
    easing: "ease-in-out",
  });

  addToggle("feature", "mouseover");
  addToggle("solution", "mouseover");
  addToggle("mining", "mouseover");
  addToggle("faq");

  const header = document.querySelector("header");
  const hamburgerBtn = document.getElementById("hamburger");
  let lastScrollY = 0;
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      header.classList.add("hide");

      if (hamburgerBtn.checked) {
        hamburgerBtn.checked = false;
      }
    } else {
      header.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
  });

  const buttons = document.querySelectorAll('[data-modal="demo-modal"]');
  buttons.forEach((button) => {
    button.addEventListener("click", openDemoModal);
  });
});

function openDemoModal(e) {
  e.preventDefault();
  // const name = e.target.dataset.modal;
  // document.getElementById(name).classList.add("show");
  // document.body.style.overflow = "hidden";
  window.open("https://www.wheelstv.net/book-a-demo/", "_blank");
}

function closeDemoModal(name) {
  document.getElementById(name).classList.remove("show");
  document.body.style.overflow = "auto";
}

function addToggle(name, event = "click") {
  const items = document.querySelectorAll(`.${name}-item`);

  items?.forEach((item) => {
    item.addEventListener(event, () => {
      const current = document.querySelector(`.${name}-item.active`);

      if (item !== current) {
        item.classList.add("active");
        current.classList.remove("active");
      }
    });
  });
}
