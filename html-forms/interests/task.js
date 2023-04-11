let checkboxArr = document.querySelectorAll(".interest__check");
let itemsArr = document.querySelectorAll(".interest_active");

checkboxArr.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.closest(".interests_active") == null) {
      elem.parentElement.nextElementSibling
        .querySelectorAll("input")
        .forEach((el) => {
          if (elem.checked) {
            el.checked = true;
          } else {
            el.checked = false;
          }
        });
    }
  });
});
