// слайдер зміни , ползунок
(function () {
  window.scalePin.onmousedown = function (event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    let shiftX = event.clientX - window.scalePin.getBoundingClientRect().left;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    function onMouseMove(event) {
      let newLeft =
        event.clientX - shiftX - scaleLine.getBoundingClientRect().left;

      // курсор вышел из слайдера => оставить бегунок в его границах.
      if (newLeft < 0) {
        newLeft = 0;
      }
      let rightEdge = scaleLine.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      scalePin.style.left = window.scaleLevel.style.width = newLeft + "px";
      functionOnChangeScrool(scaleLine.offsetWidth, newLeft);
    }

    function onMouseUp() {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    }
  };

  scalePin.ondragstart = function () {
    return false;
  };

  var effectItems = document.querySelectorAll(".effects__item");

  var imgUploadScale = document.querySelector(".img-upload__scale");
  var removeClassUnnesesery = function (indexWasClicked) {
    effectsList.forEach((effect, index) => {
      if (index !== indexWasClicked) {
        imgUploadPreview.classList.remove(effectsList[index].className);
      }
    });
  };
  imgUploadScale.style.display = "none";
  for (var i = 1; i <= 5; i++) {
    effectItems[i].addEventListener("click", function () {
      imgUploadScale.style.display = "block";
      scalePin.style.left = window.scaleLevel.style.width = "2px";
    });
  }

  effectItems[0].addEventListener("click", function () {
    imgUploadScale.style.display = "none";
  });

  effectItems.forEach((effectItem, index) => {
    effectItem.addEventListener("click", function () {
      imgUploadPreview.classList.add(effectsList[index].className);
      functionOnChangeScrool = effectsList[index].func;
      removeClassUnnesesery(index);
    });
  });
})();
