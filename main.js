console.log("main.js is running");
window.onload = function () {
  let main = document.querySelector("main#main");
  let button = document.querySelector("#btn");
  let hex_input = document.querySelector("#res-hex input");
  let rgb_input = document.querySelector("#res-rgb");
  let r_input = document.querySelector("#res-rgb input[name=red-input]");
  let g_input = document.querySelector("#res-rgb input[name=green-input]");
  let b_input = document.querySelector("#res-rgb input[name=blue-input]");

  button.onclick = function () {
    console.log("clicked");
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function rgbToHex(r, g, b) {
      return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);

    console.log("Red : " + r);
    console.log("Green : " + g);
    console.log("Blue : " + b);
    console.log("Hex : " + rgbToHex(r, g, b));

    main.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    main.style.transition = ".7s";
    hex_input.value = rgbToHex(r, g, b);
    r_input.value = r;
    g_input.value = g;
    b_input.value = b;
    document.getElementById("res").style.transition = "1s";

    if (r + g + b <= 255) {
      document.getElementById("btn").style.color = "#fffA";
      document.getElementById("res").style.color = "#fff";
    } else {
      document.getElementById("btn").style.color = "#000";
      document.getElementById("res").style.color = "#000";
    }
  };

  const copyElement = document.querySelector(".res");
  copyElement.addEventListener("mouseover", (event) => {
    console.log("Mouse in");
  });

  copyElement.addEventListener("mouseout", (event) => {
    console.log("Mouse out");
  });
};
