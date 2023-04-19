const popup = document.getElementById("subscribe-modal");

const modalClose = document.querySelector(".modal__close_times");

popup.classList.add("modal_active");

if (!document.cookie.includes("shown=true")) {
  window.addEventListener("load", () => {
    popup.classList.add("modal_active");
  });
}

let click = modalClose.addEventListener("click", () => {
  popup.classList.remove("modal_active");
  document.cookie = "shown=true";
  console.log(document.cookie);
  return;
});

if (document.cookie.includes("shown=true")) {
  popup.classList.remove("modal_active");
}

function listCoockie() {
  document.cookie.split("; ");
  console.log(document.cookie);
}

console.log(document.cookie);
