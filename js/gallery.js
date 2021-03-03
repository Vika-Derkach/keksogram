(function () {
  var renderPhotos = function (photo) {
    var photoElement = simlarPictureTemplate.cloneNode(true);

    var bigPicture = document.querySelector(".big-picture");
    var pictureCancel = document.querySelector("#picture-cancel");
    var bigPictureImg = bigPicture.querySelector(".big-picture__img");
    var bigPictureImgSrc = bigPictureImg.querySelector("img");

    // console.log(pictureImg);
    // photoElement = bigPicture;
    // for (let i = 0; i < pictureList[0].url.length; i++) {
    photoElement.addEventListener("click", function (evt) {
      bigPicture.classList.remove("hidden");
      bigPictureImgSrc.src = evt.target.src;
      console.log(evt.target);
    });

    // bigPictureImgSrc.src = pictureList[0].url[i];
    // }
    pictureCancel.addEventListener("click", function () {
      bigPicture.classList.add("hidden");
    });
    document.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        bigPicture.classList.add("hidden");
      }
    });

    bigPicture.querySelector(".likes-count").textContent =
      pictureList[0].likes[
        Math.floor(Math.random() * pictureList[0].likes.length)
      ];

    bigPicture.querySelector(".comments-count").textContent =
      pictureList[0].commentsQuantity[
        Math.floor(Math.random() * pictureList[0].commentsQuantity.length)
      ];
    bigPicture.querySelector(".social__caption").textContent =
      pictureList[0].description[
        Math.floor(Math.random() * pictureList[0].description.length)
      ];

    //   var image = photoElement.querySelector("img");
    //   image.src = pictureList[0].url;
    // for (var i = 0; i <= 25; i++) {
    photoElement.querySelector("img").src = pictureList[0].url[i];
    // }

    photoElement.querySelector(".picture__stat--likes").textContent =
      pictureList[0].likes[
        Math.floor(Math.random() * pictureList[0].likes.length)
      ];

    photoElement.querySelector(".picture__stat--comments").textContent =
      pictureList[0].commentsQuantity[
        Math.floor(Math.random() * pictureList[0].commentsQuantity.length)
      ];
    // console.log(photoElement);
    // var pictureImg = document.querySelectorAll(".picture__img");

    return photoElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 26; i++) {
    fragment.appendChild(renderPhotos(pictureList[i]));
  }
  pictures.appendChild(fragment);

  // bigPictureImgSrc.src = pictureList[0].url[4];
  console.log(pictureList[0].url[1]);
  console.log(userPhoto);
})();
