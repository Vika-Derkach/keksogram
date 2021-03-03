//слайдер верхній
(function () {
  var resizeControlValue = document.querySelector(".resize__control--value");
  var resizeControlMinus = document.querySelector(".resize__control--minus");
  var resizeControlPlus = document.querySelector(".resize__control--plus");
  var resizeValue = ["25%", "50%", "75%", "100%"];
  let controlIndex = 3;

  var changeSizePic = function () {
    if (controlIndex == 0) {
      imgUploadPreview.style.transform = "scale(0.25)";
    } else if (controlIndex == 1) {
      imgUploadPreview.style.transform = "scale(0.50)";
    } else if (controlIndex == 2) {
      imgUploadPreview.style.transform = "scale(0.75)";
    } else {
      imgUploadPreview.style.transform = "scale(0.)";
    }
  };

  resizeControlMinus.addEventListener("click", function () {
    if (controlIndex <= 0) {
      resizeControlValue.value = resizeValue[0];
    } else {
      resizeControlValue.value = resizeValue[controlIndex];
      controlIndex--;
    }
    changeSizePic(controlIndex);
  });
  resizeControlPlus.addEventListener("click", function () {
    if (controlIndex >= 3) {
      resizeControlValue.value = resizeValue[3];
    } else {
      resizeControlValue.value = resizeValue[controlIndex];
      controlIndex++;
    }
    changeSizePic(controlIndex);
  });
})();
