const xhr = new XMLHttpRequest();

const title = document.querySelector(".poll__title");

const buttons = document.querySelector(".poll__answers");

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    title.innerHTML = JSON.parse(xhr.responseText).data.title;

    let itemsArr = JSON.parse(xhr.responseText).data.answers;
    itemsArr.forEach((el) => {
      let button = document.createElement("button");

      button.className = "poll__answer";
      button.innerHTML = el;
      buttons.append(button);

      button.onclick = () => {
        alert("«Спасибо, ваш голос засчитан!»");
      };
    });
  }
});
