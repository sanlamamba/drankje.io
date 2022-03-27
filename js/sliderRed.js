const slider1 = document.getElementsByClassName("red_slider");

const sliderRed = document.getElementsByClassName("sliderRed")[0];

sliderRed.style.transform =
  "translateX(-" + sliderRed.attributes[1].value + "%)";
for (let button of slider1) {
  //addeventlistener click to button
  button.addEventListener("click", function () {
    switch (button.attributes[1].value) {
      case "right":
        sliderRed.attributes[1].value =
          parseInt(sliderRed.attributes[1].value) >= 3
            ? 0
            : parseInt(sliderRed.attributes[1].value) + 1;
        break;
      case "left":
        sliderRed.attributes[1].value =
          parseInt(sliderRed.attributes[1].value) > 0
            ? parseInt(sliderRed.attributes[1].value) - 1
            : 3;
        break;
      default:
        break;
    }

    sliderRed.style.transform =
      "translateX(-" + sliderRed.attributes[1].value * 10 + "%)";
  });
}
