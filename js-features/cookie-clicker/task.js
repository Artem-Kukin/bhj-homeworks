const cookie = document.getElementById("cookie");

const clicker__counter = document.getElementById("clicker__counter");

cookie.onclick = function () {
  let sizeImage = clicker__counter.textContent++;
  
  cookie.width = sizeImage % 2 ? 250 : 200;
  cookie.height = sizeImage % 2 ? 250 : 200;

    };
