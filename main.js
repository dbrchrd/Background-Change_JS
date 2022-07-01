console.log("main.js is running");
window.onload = function () {
  let main = document.querySelector("main#main"),
    res_container = document.querySelector("#res"),
    hex_input = document.querySelector("#res-hex input[name=hex-input"),
    r_input = document.querySelector("#res-rgb input[name=red-input]"),
    g_input = document.querySelector("#res-rgb input[name=green-input]"),
    b_input = document.querySelector("#res-rgb input[name=blue-input]");

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

  function hexToRgb(hex) {
    r = parseInt(hex[0] + hex[1], 16).toString(10);
    g = parseInt(hex[2] + hex[3], 16).toString(10);
    b = parseInt(hex[4] + hex[5], 16).toString(10);
    /* if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b; */
    return [r, g, b];
    // return (1 << 24) + (r << 16) + (g << 8) + b;
  }

  const updateRGBColor = (el, hex, [r, g, b]) => {
    var numberPattern = /\d+/g;
    // console.log(
    //   ">>",
    r = r.match(numberPattern).join("");
    g = g.match(numberPattern).join("");
    b = b.match(numberPattern).join("");
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

    parseInt(r, 10) + parseInt(g, 10) + parseInt(b, 10) <= 255
      ? (res_container.style.color = "#fff")
      : (res_container.style.color = "#000");
  };
  const updateHEXColor = (el, hex, [r, g, b]) => {
    r = hexToRgb(hex)[0];
    g = hexToRgb(hex)[1];
    b = hexToRgb(hex)[2];
    console.log(hex_input.value, hexToRgb(hex));
    r_input.value = r;
    g_input.value = g;
    b_input.value = b;
    main.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    res_container.style.transition = "1s";

    parseInt(r, 10) + parseInt(g, 10) + parseInt(b, 10) <= 255
      ? (res_container.style.color = "#fff")
      : (res_container.style.color = "#000");
  };

  document.querySelectorAll(".res input").forEach((el) => {
    el.name !== "hex-input" ? (el.value = 0) : (el.value = "000000");
    r_input.value = g_input.value = b_input.value = 0;
    updateRGBColor(el, null, [r_input.value, g_input.value, b_input.value]);

    el.addEventListener("keyup", () => {
      el.value === "" ? (el.value = 0) : 0;
      el.name === "hex-input"
        ? updateHEXColor(el, hex_input.value, [null, null, null])
        : updateRGBColor(el, null, [
            r_input.value,
            g_input.value,
            b_input.value,
          ]);
    });
    el.addEventListener("click", () => {
      el.ariaSelected = true;
    });
  });
};
