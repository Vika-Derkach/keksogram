(function () {
  //   var socialComment = document.querySelectorAll(".social__comment");
  //   socialComment[0].querySelector(".social__text").textContent =
  //     pictureList[0].comments[
  //       Math.floor(Math.random() * pictureList[0].comments.length)
  //     ];

  //   socialComment[1].querySelector(".social__text").textContent =
  //     pictureList[0].comments[
  //       Math.floor(Math.random() * pictureList[0].comments.length)
  //     ];

  //   var socialPicture_1 = socialComment[0].querySelector(".social__picture");
  //   var socialPicture_2 = socialComment[1].querySelector(".social__picture");
  //   console.log(socialPicture_1);
  //   socialPicture_1.src =
  //     pictureList[0].avatar[
  //       Math.floor(Math.random() * pictureList[0].avatar.length)
  //     ];
  //   socialPicture_2.src =
  //     pictureList[0].avatar[
  //       Math.floor(Math.random() * pictureList[0].avatar.length)
  //     ];

  // socialCommentCount.classList.add("visually-hidden");

  // socialLoadmore.classList.add("visually-hidden");
  // if (photo.comments.length > 5) {

  // }
  var uploadFile = document.querySelector("#upload-file");
  window.imgUploadOverlay = document.querySelector(".img-upload__overlay");
  window.scaleLine = imgUploadOverlay.querySelector(".scale__line");
  window.imgUploadInput = document.querySelector(".img-upload__input");
  window.scalePin = scaleLine.querySelector(".scale__pin");
  window.scaleLevel = scaleLine.querySelector(".scale__level");
  var uploadCancel = imgUploadOverlay.querySelector("#upload-cancel");
  var scaleMain = "1%";
  //  scaleLevel.style.width;
  scaleLevel.style.width = scalePin.style.left = scaleMain;

  uploadFile.addEventListener("click", function () {
    imgUploadOverlay.classList.remove("hidden");
    imgUploadInput.classList.remove("visually-hidden");
  });
  uploadCancel.addEventListener("click", function () {
    imgUploadOverlay.classList.add("hidden");
    imgUploadInput.classList.add("visually-hidden");
  });
  document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      imgUploadOverlay.classList.add("hidden");
    }
  });

  //відправляємо форму , і закриваємо вікно img-upload__overlay
  var form = document.querySelector(".img-upload__form");
  form.addEventListener("submit", function (evt) {
    window.upload(new FormData(form), function (response) {
      imgUploadOverlay.classList.add("hidden");
    });
    evt.preventDefault();
  });
})();
