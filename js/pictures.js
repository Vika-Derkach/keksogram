// var galleryOverlay = document.querySelector(".gallery-overlay");
// galleryOverlay.classList.remove("hidden");
var simlarPictureTemplate = document
  .querySelector("#picture")
  .content.querySelector(".picture__link");
var userPhoto = simlarPictureTemplate.querySelector("img");
var pictures = document.querySelector(".pictures");
for (var i = 0; i < 26; i++) {
  //   var start = 15;
  //   // var end = 200;
  //   while (start <= 200) {
  //     pictureList[0].likes.push(start++);
  //   }

  var pictureList = [
    {
      url: [],
      likes: [],
      comments: [
        "Всё отлично!",
        "В целом всё неплохо. Но не всё.",
        "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
        "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше",
        "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
        "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
      ],
      commentsQuantity: [],
      description: [
        "Тестим новую камеру!",
        "Затусили с друзьями на море",
        "Как же круто тут кормят",
        "Отдыхаем...",
        "Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......",
        "Вот это тачка!",
      ],
      avatar: [],
    },
  ];
}
var effectsList = [
  " ",
  "effects__preview--chrome",
  "effects__preview--sepia",
  "effects__preview--marvin",
  "effects__preview--phobos",
  "effects__preview--heat",
];
console.log(effectsList);
var start = 15;
// var end = 200;
while (start <= 200) {
  pictureList[0].likes.push(start++);
}
var begin = 2;
while (begin <= 50) {
  pictureList[0].commentsQuantity.push(begin++);
}
for (var i = 1; i <= 26; i++) {
  pictureList[0].url.push(`photos/${i}.jpg`);
}
for (var i = 1; i <= 6; i++) {
  pictureList[0].avatar.push(`img/avatar-${i}.svg`);
}
console.log(pictureList[0].comments[1]);
console.log(pictureList[0].url);
console.log(pictureList[0].avatar);
// for (var i = 0; i < 25; i++) {
var renderPhotos = function (photo) {
  var photoElement = simlarPictureTemplate.cloneNode(true);
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
  console.log(photoElement);
  return photoElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 26; i++) {
  fragment.appendChild(renderPhotos(pictureList[i]));
}
pictures.appendChild(fragment);
var bigPicture = document.querySelector(".big-picture");
// bigPicture.classList.remove("hidden");
bigPicture.querySelector(".likes-count").textContent =
  pictureList[0].likes[Math.floor(Math.random() * pictureList[0].likes.length)];

bigPicture.querySelector(".comments-count").textContent =
  pictureList[0].commentsQuantity[
    Math.floor(Math.random() * pictureList[0].commentsQuantity.length)
  ];
bigPicture.querySelector(".social__caption").textContent =
  pictureList[0].description[
    Math.floor(Math.random() * pictureList[0].description.length)
  ];
var socialComment = document.querySelectorAll(".social__comment");
socialComment[0].querySelector(".social__text").textContent =
  pictureList[0].comments[
    Math.floor(Math.random() * pictureList[0].comments.length)
  ];

socialComment[1].querySelector(".social__text").textContent =
  pictureList[0].comments[
    Math.floor(Math.random() * pictureList[0].comments.length)
  ];

var socialPicture_1 = socialComment[0].querySelector(".social__picture");
var socialPicture_2 = socialComment[1].querySelector(".social__picture");
console.log(socialPicture_1);
socialPicture_1.src =
  pictureList[0].avatar[
    Math.floor(Math.random() * pictureList[0].avatar.length)
  ];
socialPicture_2.src =
  pictureList[0].avatar[
    Math.floor(Math.random() * pictureList[0].avatar.length)
  ];

var socialCommentCount = document.querySelector(".social__comment-count");
socialCommentCount.classList.add("visually-hidden");
var socialLoadmore = document.querySelector(".social__comment-loadmore");
socialLoadmore.classList.add("visually-hidden");

var uploadFile = document.querySelector("#upload-file");
var imgUploadOverlay = document.querySelector(".img-upload__overlay");
var scaleLine = imgUploadOverlay.querySelector(".scale__line");

var scalePin = scaleLine.querySelector(".scale__pin");
var scaleLevel = scaleLine.querySelector(".scale__level");

var scaleMain = "1%";
//  scaleLevel.style.width;
scaleLevel.style.width = scalePin.style.left = scaleMain;

// uploadFile.addEventListener("click", function () {
//   imgUploadOverlay.classList.remove = "hidden";
// });
uploadFile.addEventListener("click", function () {
  imgUploadOverlay.classList.remove("hidden");
});

// console.log(imgUploadOverlay);
// scalePin.addEventListener("mousedown", function () {
//   scalePin
// });
scalePin.onmousedown = function (event) {
  event.preventDefault(); // предотвратить запуск выделения (действие браузера)

  let shiftX = event.clientX - scalePin.getBoundingClientRect().left;
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(event) {
    let newLeft =
      event.clientX - shiftX - scaleLine.getBoundingClientRect().left;

    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = scaleLine.offsetWidth - scalePin.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    scalePin.style.left = scaleLevel.style.width = newLeft + "px";
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

var imgUploadPreview = document.querySelector(".img-upload__preview");
console.log(effectItems[1]);
effectItems.forEach((effectItem, index) => {
  effectItem.addEventListener("click", function () {
    imgUploadPreview.classList.add(effectsList[index]);
  });
});
//map, filter, reduce, find, findIndex
// for (let i = 0; i < 6; i++) {
//   effectItems[i].addEventListener("click", function () {
//     imgUploadPreview.classList.add(effectsList[i]);
//   });
// }

var removeClassUnnesesery = function (indexWasClicked) {
  effectsList.forEach((effect) => {
    if (effect == indexWasClicked) {
      imgUploadPreview.classList.remove(effectsList[indexWasClicked]);
    }
  });
};
removeClassUnnesesery();
// effectItems[1].addEventListener("click", function () {
//   imgUploadPreview.classList.add(effectsList[1]);
//   // function remov()
// });

// effectItems[2].addEventListener("click", function () {
//   imgUploadPreview.classList.add("effects__preview--sepia");
// });

// effectItems[3].addEventListener("click", function () {
//   imgUploadPreview.classList.add("effects__preview--marvin");
// });
// effectItems[4].addEventListener("click", function () {
//   imgUploadPreview.classList.add("effects__preview--phobos");
// });
// effectItems[5].addEventListener("click", function () {
//   imgUploadPreview.classList.add("effects__preview--heat");
// });

// var socialText = document.createElement("p");
// socialText.classList.add("social__text");
// socialComment.appendChild(socialText);
// socialText.textContent =
//   pictureList[0].comments[
//     Math.floor(Math.random() * pictureList[0].comments.length)
//   ];

// var galleryOverlay = document.querySelector(".gallery-overlay");
// galleryOverlay.classList.remove("hidden");
// var bigImage = galleryOverlay.querySelector("img");
// bigImage.src = pictureList[0].url[2];
// // var likesCount = document.querySelector(".likes-count");
// galleryOverlay.querySelector(".likes-count").textContent =
//   pictureList[0].likes[Math.floor(Math.random() * pictureList[0].likes.length)];

// galleryOverlay.querySelector(".comments-count").textContent =
//   pictureList[0].commentsQuantity[
//     Math.floor(Math.random() * pictureList[0].commentsQuantity.length)
//   ];

// var galleryPreview = document.querySelector(".gallery-overlay-preview");
// var socialComment = document.createElement("li");
// socialComment.classList.add("social__comment", "social__comment--text");
// galleryPreview.appendChild(socialComment);
// var socialPicture = document.createElement("img");
// socialPicture.classList.add("social__picture");
// socialComment.appendChild(socialPicture);
// socialPicture.alt = "Аватар комментатора фотографии";
// socialPicture.src =
//   pictureList[0].avatar[
//     Math.floor(Math.random() * pictureList[0].avatar.length)
//   ];
// socialPicture.style.width = "35px";
// socialPicture.style.height = "35px";
// socialPicture.style.borderRadius = "50%";
// var socialText = document.createElement("p");
// socialText.classList.add("social__text");
// socialComment.appendChild(socialText);
// socialText.textContent =
//   pictureList[0].comments[
//     Math.floor(Math.random() * pictureList[0].comments.length)
//   ];
// socialText.style.color = "#000";
