let reveal = document.querySelectorAll(".reveal");
document.addEventListener("scroll", () => {
  reveal.forEach((elem) => {
    const elementTop = elem.getBoundingClientRect().top;
    if (elementTop < window.innerHeight) {
      elem.classList.add("reveal_active");
    } else {
      elem.classList.remove("reveal_active");
    }
  });
});
