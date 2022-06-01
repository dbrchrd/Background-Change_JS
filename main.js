console.log("main.js is running");
window.onload = function () {
  let main = document.querySelector("main#main");
  let res_container = document.querySelector("#res");
  let hex_input = document.querySelector("#res-hex input[name=hex-input");
  let r_input = document.querySelector("#res-rgb input[name=red-input]");
  let g_input = document.querySelector("#res-rgb input[name=green-input]");
  let b_input = document.querySelector("#res-rgb input[name=blue-input]");

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function rgbToHex(r, g, b) {
    parseInt(r, 10) === null ? (r = 0) : null;

    r = parseInt(r, 10).toString(16);
    g = parseInt(g, 10).toString(16);
    b = parseInt(b, 10).toString(16);
    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;
    return r + g + b;
    // return (1 << 24) + (r << 16) + (g << 8) + b;
  }

  const updateColor = (el, hex, [r, g, b]) => {
    var numberPattern = /\d+/g;
    // console.log(
    //   ">>",
    //   r.match(numberPattern).join(""),
    //   g.match(numberPattern).join(""),
    //   b.match(numberPattern).join("")
    // );
    // console.log(
    //   "rgb(" +
    //     r +
    //     "," +
    //     g +
    //     "," +
    //     b +
    //     ")" +
    //     "   |   Hex : " +
    //     rgbToHex(r, g, b) +
    //     "   |   " +
    //     el.name
    // );

    r_input.value = r.match(numberPattern).join("");
    g_input.value = g.match(numberPattern).join("");
    b_input.value = b.match(numberPattern).join("");

    hex_input.value = rgbToHex(r, g, b);
    main.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    res_container.style.transition = "1s";

    if (parseInt(r, 10) + parseInt(g, 10) + parseInt(b, 10) <= 255) {
      button.style.color = "#fffA";
      res_container.style.color = "#fff";
    } else {
      button.style.color = "#000";
      res_container.style.color = "#000";
    }
  };

  document.querySelectorAll(".res input").forEach((el) => {
    el.name !== "hex-input" ? (el.value = 0) : (el.value = "000000");
    r_input.value = 0;
    g_input.value = 0;
    b_input.value = 0;
    updateColor(el, null, [r_input.value, g_input.value, b_input.value]);

    el.addEventListener("keyup", () => {
      el.value === "" ? (el.value = 0) : 0;
      el.name === "hex-input"
        ? updateColor(el, hex_input.value, [null, null, null])
        : updateColor(el, null, [r_input.value, g_input.value, b_input.value]);
    });
    el.addEventListener("click", () => {
      el.ariaSelected = true;
    });
  });
};
