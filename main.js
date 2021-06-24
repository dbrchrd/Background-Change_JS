console.log("main.js is running");
window.onload = function () {
  var buttonChange = document.getElementById('btn');
  var hexColour = document.getElementById('res-hex')
  var rgbColour = document.getElementById('res-rgb')

  buttonChange.onclick = function () {
    console.log("clicked");
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function rgbToHex(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);

    console.log("Red : "+r);
    console.log("Green : "+g);
    console.log("Blue : "+b);
    console.log("Hex : "+rgbToHex(r, g, b));

    document.getElementById("main").style.background = "rgb("+r+","+g+","+b+")";
    document.getElementById("main").style.transition = ".7s";
    hexColour.innerHTML = rgbToHex(r, g, b);
    rgbColour.innerHTML = r + "|" + g + "|" + b;
    document.getElementById("res").style.transition = "1s";

    if (r < 50 && g < 50 && b < 50) {
      document.getElementById("btn").style.color = "#fff";
      document.getElementById("res").style.color = "#fff";
    }else {
      document.getElementById("btn").style.color = "#000";
      document.getElementById("res").style.color = "#000";

    }
    if (r > 50 && g > 50 && b > 50) {
      document.querySelectorAll(".res").style.background = "#000";
    }
  }

  const copyElement = document.querySelector(".res");
  copyElement.addEventListener("mouseover", event => {
    console.log("Mouse in");
  });

  copyElement.addEventListener("mouseout", event => {
    console.log("Mouse out");
  });

}
