const xhr = new XMLHttpRequest();
const loader = document.getElementById("loader");
const itemsContainer = document.getElementById("items");

xhr.open(
  "GET",
  " https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);

xhr.responseType = "json";

xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove("loader_active");
    let itemsObj = xhr.response;
    let itemsArr = Object.values(itemsObj.response.Valute);

    itemsArr.forEach((elem) => {
      let itemElem = document.createElement("div");
      itemElem.className = "item";
      itemsContainer.append(itemElem);

      let itemCode = document.createElement("div");
      itemCode.className = "item__code";
      itemElem.append(itemCode);

      let itemValue = document.createElement("div");
      itemValue.className = "item__value";
      itemElem.append(itemValue);

      let itemCurr = document.createElement("div");
      itemCurr.className = "item__currency";
      itemCurr.innerHTML = "руб.";
      itemElem.append(itemCurr);

      itemCode.innerHTML = elem.CharCode;
      itemValue.innerHTML = elem.Value;
    });
  }
});
