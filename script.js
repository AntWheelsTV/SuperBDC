window.addEventListener("load", () => {
  AOS.init({
    once: true,
    duration: 600,
    offset: 50,
    easing: "ease-in-out",
  });

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

  addToggle("feature", "mouseover");
  addToggle("solution", "mouseover");
  addToggle("mining", "mouseover");
  addToggle("faq");

  const header = document.querySelector("header");

  let lastScrollY = 0;
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
  });

  const buttons = document.querySelectorAll('[data-modal="demo-modal"]');

  buttons.forEach((button) => {
    button.addEventListener("click", openDialog);
  });
});

function openDialog(e) {
  e.preventDefault();
  // document.getElementById("demo-modal").classList.add("show");
  // document.body.style.overflow = "hidden";
  window.open("https://www.wheelstv.net/book-a-demo/", "_blank");
}

function closeDialog() {
  document.getElementById("demo-modal").classList.remove("show");
  document.body.style.overflow = "auto";
}
