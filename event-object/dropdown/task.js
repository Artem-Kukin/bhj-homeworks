const dropdownValue = document.querySelector(".dropdown__value");

const arrayDropdownList = Array.from(
  document.querySelectorAll(".dropdown__list > .dropdown__item")
);

const dropdownList = document.querySelector(".dropdown__list");

dropdownValue.onclick = () => {
  if (dropdownList.classList.contains("dropdown__list_active") == false) {
    dropdownList.classList.add("dropdown__list_active");
  } else {
    arrayDropdownList.forEach((element) =>
      element.parentElement.classList.remove("dropdown__list_active")
    );
  }
};

arrayDropdownList.forEach((element) => {
  element.onclick = () => {
    dropdownValue.textContent = element.textContent;
    element.parentElement.classList.remove("dropdown__list_active");
    return false;
  };
});
