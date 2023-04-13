const tasksInput = document.querySelector(".tasks__input");

const tasksAdd = document.querySelector(".tasks__add");

const tasksForm = document.getElementById("tasks__form");

const tasksList = document.querySelector(".tasks__list");

tasksForm.onsubmit = function () {
  let text = tasksInput.value.trim();
  if (text) {
    tasksList.insertAdjacentHTML(
      "beforeend",
      `<div class="task">
      <div class="task__title">${text}</div>
      <a href="#" class="task__remove">
      &times;
      </a>
      </div>`
    );
    let tasksRemove = document.querySelectorAll(".task__remove");
    tasksRemove[tasksRemove.length - 1].addEventListener("click", function () {
      this.parentElement.remove();
    });
  }
  tasksInput.value = "";
  return false;
};
