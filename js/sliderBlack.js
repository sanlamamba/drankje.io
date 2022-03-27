const slider2 = document.getElementsByClassName("black_slider");

const sliderBlack = document.getElementsByClassName("sliderBlack")[0];
console.log(sliderBlack);

sliderBlack.style.transform =
  "translateX(-" + sliderBlack.attributes[1].value + "%)";
for (let button of slider2) {
  //addeventlistener click to button
  button.addEventListener("click", function () {
    switch (button.attributes[1].value) {
      case "right":
        sliderBlack.attributes[1].value =
          parseInt(sliderBlack.attributes[1].value) >= 3
            ? 0
            : parseInt(sliderBlack.attributes[1].value) + 1;
        break;
      case "left":
        sliderBlack.attributes[1].value =
          parseInt(sliderBlack.attributes[1].value) > 0
            ? parseInt(sliderBlack.attributes[1].value) - 1
            : 3;
        break;
      default:
        break;
    }
    console.log(sliderBlack.attributes[1].value);

    sliderBlack.style.transform =
      "translateX(-" + sliderBlack.attributes[1].value * 10 + "%)";
  });
}
