const arrayMenuSub = Array.from(document.querySelectorAll(".menu_sub"));

for (const items of arrayMenuSub) {
  let active = items.parentElement;

  active.onclick = () => {
    if (document.querySelector(".menu_active") == null) {
      items.classList.add("menu_active");
      return false;
    } else if (document.querySelector(".menu_active") !== null) {
      arrayMenuSub.forEach((item) => item.classList.remove("menu_active"));
      return false;
    }
  };
}
