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

    //велика картинка
    var socialComment = document.querySelectorAll(".social__comment");

    var socialComments = document.querySelector(".social__comments");
    var comentTemplate = socialComments
      .querySelector(".social__comment")
      .cloneNode(true);

    photoElement.addEventListener("click", function (evt) {
      bigPicture.classList.remove("hidden");
      bigPictureImgSrc.src = evt.target.src;
      bigPicture.querySelector(".likes-count").textContent = photo.likes;
      bigPicture.querySelector(".comments-count").textContent =
        photo.comments.length;
      bigPicture.querySelector(".social__caption").textContent =
        photo.description;
      socialComments.innerHTML = "";
      for (let i = 0; i < photo.comments.length; i++) {
        var newComment = comentTemplate.cloneNode(true);
        socialComments.appendChild(newComment);
        var socialPicture = newComment.querySelector(".social__picture");
        socialPicture.src = photo.comments[i].avatar;
        console.log(socialPicture);
        var socialText = newComment.querySelector(".social__text");
        socialText.textContent = photo.comments[i].message;
      }

      // socialPicture.querySelector(".social__picture").src =
      //   photo.comments.avatar;
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

    // bigPicture.querySelector(".likes-count").textContent = photo.likes;

    // pictureList[0].likes[
    //   Math.floor(Math.random() * pictureList[0].likes.length)
    // ];

    // bigPicture.querySelector(".comments-count").textContent =
    //   photo.comments.length;
    // pictureList[0].commentsQuantity[
    //   Math.floor(Math.random() * pictureList[0].commentsQuantity.length)
    // ];
    // bigPicture.querySelector(".social__caption").textContent =
    //   photo.description;
    // pictureList[0].description[
    //   Math.floor(Math.random() * pictureList[0].description.length)
    // ];

    //маленькі картинки
    photoElement.querySelector("img").src = photo.url;
    // pictureList[0].url[i];

    photoElement.querySelector(".picture__stat--likes").textContent =
      photo.likes;
    // pictureList[0].likes[
    //   Math.floor(Math.random() * pictureList[0].likes.length)
    // ];

    photoElement.querySelector(".picture__stat--comments").textContent =
      photo.comments.length;
    // pictureList[0].commentsQuantity[
    //   Math.floor(Math.random() * pictureList[0].commentsQuantity.length)
    // ];

    return photoElement;
  };

  // var fragment = document.createDocumentFragment();
  // for (var i = 0; i < 26; i++) {
  //   fragment.appendChild(renderPhotos(pictureList[i]));
  // }
  // pictures.appendChild(fragment);

  //получаємо фотки
  var successHandler = function (photos) {
    var filterPopular = imgFilters.querySelector("#filter-popular");
    var filterNew = imgFilters.querySelector("#filter-new");
    var filterDiscussed = imgFilters.querySelector("#filter-discussed");

    var fragment = document.createDocumentFragment();

    for (let i = 0; i < 25; i++) {
      fragment.appendChild(renderPhotos(photos[i]));
    }
    pictures.appendChild(fragment);

    // var removePreviousImg = function () {
    //   // pictureAllFilter.forEach((onePictue) => {
    //   //   pictures.removeChild(onePictue);
    //   // });
    // };
    // console.log(pictureAllFilter);

    filterNew.addEventListener("click", function () {
      var pictureAllFilter = pictures.querySelectorAll(".picture__link");
      pictureAllFilter.forEach((onePictue) => {
        pictures.removeChild(onePictue);
      });
      // pictureAllFilter.forEach((onePictue) => {
      //   pictures.removeChild(onePictue);
      // });
      // removePreviousImg();
      // for (let i = 0; i < 10; i++) {
      //   fragment.appendChild(
      //     renderPhotos(photos[Math.floor(Math.random() * photos.length)])
      //     // renderPhotos(shuffle(photos[i]))
      //   );
      //   // console.log(_.shuffle(_.range(1,1001)).slice(0,20))
      // }
      var uniquePictureIndex = new Set();
      while (uniquePictureIndex.size < 10) {
        uniquePictureIndex.add(Math.floor(Math.random() * photos.length));
      }
      for (let item of uniquePictureIndex) {
        fragment.appendChild(
          renderPhotos(photos[item])
          // renderPhotos(shuffle(photos[i]))
        );
      }
      pictures.appendChild(fragment);
    });

    filterPopular.addEventListener("click", function () {
      var pictureAllFilter = pictures.querySelectorAll(".picture__link");
      pictureAllFilter.forEach((onePictue) => {
        pictures.removeChild(onePictue);
      });
      // removePreviousImg();
      // var pictureAllFilterCopy = pictureAllFilter.slice();
      for (let i = 0; i < 25; i++) {
        fragment.appendChild(renderPhotos(photos[i]));
      }
      pictures.appendChild(fragment);
      // console.log(pictureAllFilterCopy.sort());
    });
    filterDiscussed.addEventListener("click", function () {
      var pictureAllFilter = pictures.querySelectorAll(".picture__link");
      pictureAllFilter.forEach((onePictue) => {
        pictures.removeChild(onePictue);
      });

      for (let i = 0; i < 25; i++) {
        // console.log(renderPhotos(sortAllPicturesCopy[i]));
        var allPictures = [];
      }
      for (let i = 0; i < 25; i++) {
        var pictureObject = photos[i];
        var pushPicturesInMassive = allPictures.push(pictureObject);
        // var sorter = comentsLength.sort();
      }
      // var fragmentCopy;
      var allPicturesCopy = allPictures.slice();
      var sortAllPicturesCopy = allPicturesCopy.sort(function (left, right) {
        return right.comments.length - left.comments.length;
      });
      for (let i = 0; i < 25; i++) {
        fragment.appendChild(renderPhotos(sortAllPicturesCopy[i]));
        // console.log(renderPhotos(sortAllPicturesCopy[i]));
      }
      pictures.appendChild(fragment);
      // for (let i = 0; i < 25; i++) {
      //   // fragment.appendChild(renderPhotos(photos[i]));
      //   console.log(renderPhotos(sortAllPicturesCopy[i]));
      //   var allPictures = [];
      // }
      // for (let i = 0; i < 25; i++) {
      //   var pictureObject = photos[i];
      //   var pushPicturesInMassive = allPictures.push(pictureObject);
      //   // var sorter = comentsLength.sort();
      // }

      // for (let i = 0; i < 25; i++) {
      //   fragmentSimilar.appendChild(renderPhotos(photos[i]));
      // }
      console.log(allPictures);
      console.log(sortAllPicturesCopy);
      // console.log(photos[1]);
      // fragmentSimilar = sortAllPicturesCopy;
      pictures.appendChild(fragmentSimilar);
    });
  };
  var errorHandler = function (errorMessage) {
    var node = document.createElement("div");
    node.style =
      "z-index: 100; margin: 0 auto; text-align: center; background-color: red;";
    node.style.position = "absolute";
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = "30px";

    node.textContent = errorMessage;

    document.body.insertAdjacentElement("afterbegin", node);
  };
  window.load(successHandler, errorHandler);

  //філтер фото зверху
  var imgFilters = document.querySelector(".img-filters");
  imgFilters.classList.remove("img-filters--inactive");
  var imgFiltersButtons = imgFilters.querySelectorAll(".img-filters__button");
  var removeClassUnnesesery = function (indexWasClicked) {
    imgFiltersButtons.forEach((button, index) => {
      if (index !== indexWasClicked) {
        imgFiltersButtons[index].classList.remove(
          "img-filters__button--active"
        );
      }
    });
  };
  imgFiltersButtons.forEach((imgFiltersButton, index) => {
    imgFiltersButton.addEventListener("click", function () {
      imgFiltersButton.classList.add("img-filters__button--active");

      removeClassUnnesesery(index);
    });
  });

  // var filterPopular = imgFilters.querySelector("#filter-popular");
  // var filterNew = imgFilters.querySelector("#filter-new");
  // var filterDiscussed = imgFilters.querySelector("#filter-discussed");
})();
