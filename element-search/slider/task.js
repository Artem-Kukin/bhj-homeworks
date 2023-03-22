const arrayItems = Array.from(document.querySelectorAll(".slider__item"));
const next = document.querySelector(".slider__arrow_next");
const prev = document.querySelector(".slider__arrow_prev");

next.onclick = () => {
  let active = arrayItems.findIndex((element) =>
    element.classList.contains("slider__item_active")
  );

  arrayItems[active].classList.remove("slider__item_active");

  if (active === arrayItems.length - 1) {
    active = 0;
  } else {
    active += 1;
  }

  arrayItems[active].classList.add("slider__item_active");
};


prev.onclick = () => {
    let active = arrayItems.findIndex((element) =>
    element.classList.contains("slider__item_active")
  );

  arrayItems[active].classList.remove("slider__item_active");

  if (active === 0) {
    active = arrayItems.length - 1;
  } else {
    active -= 1;
  }

  arrayItems[active].classList.add("slider__item_active");

};  
