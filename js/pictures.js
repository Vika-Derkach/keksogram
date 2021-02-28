// var galleryOverlay = document.querySelector(".gallery-overlay");
// galleryOverlay.classList.remove("hidden");
var simlarPictureTemplate = document
  .querySelector("#picture")
  .content.querySelector(".picture__link");
var userPhoto = simlarPictureTemplate.querySelector("img");
var imgUploadPreview = document.querySelector(".img-upload__preview");
var pictures = document.querySelector(".pictures");
var functionOnChangeScrool = (maxX, value) => {
  console.log({ maxX, value });
};

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
const shrink = (maxX, maxY, value) => {
  return (value * maxY) / maxX;
};
var effectsList = [
  {
    className: "effects__preview--without",
  },
  {
    className: "effects__preview--chrome",
    func: (maxX, value) => {
      imgUploadPreview.style.filter = `grayscale(${
        0.1 + shrink(maxX, 1, value)
      })`;
    },
  },
  {
    className: "effects__preview--sepia",
    func: (maxX, value) => {
      imgUploadPreview.style.filter = `sepia(${0.1 + shrink(maxX, 1, value)})`;
    },
  },
  {
    className: "effects__preview--marvin",
    func: (maxX, value) => {
      imgUploadPreview.style.filter = `invert(${
        10 + shrink(maxX, 100, value)
      }%)`;
    },
  },
  {
    className: "effects__preview--phobos",
    func: (maxX, value) => {
      imgUploadPreview.style.filter = `blur(${1 + shrink(maxX, 2, value)}px)`;
    },
  },
  {
    className: "effects__preview--heat",
    func: (maxX, value) => {
      imgUploadPreview.style.filter = `brightness(${
        1 + shrink(maxX, 2, value)
      })`;
    },
  },
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
// var pictureImg = document.querySelectorAll(".picture__img");
// var bigPicture = document.querySelector(".big-picture");
// var bigPictureImg = bigPicture.querySelector(".big-picture__img");
// var bigPictureImgSrc = bigPictureImg.querySelector("img");
// console.log(pictureImg);
// for (let i = 0; i < pictureList[0].url.length; i++) {
//   pictureImg[i].addEventListener("click", function () {
//     bigPicture.classList.remove("hidden");
//   });
//   console.log(pictureImg);
// }

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
// var pictureLink = document.querySelectorAll(".picture__link");
// var pictureImg = pictureLink.querySelector(".picture__img");
// console.log(pictureLink);
// console.log(pictureImg);
// bigPicture.querySelector(".likes-count").textContent =
//   pictureList[0].likes[Math.floor(Math.random() * pictureList[0].likes.length)];

// bigPicture.querySelector(".comments-count").textContent =
//   pictureList[0].commentsQuantity[
//     Math.floor(Math.random() * pictureList[0].commentsQuantity.length)
//   ];
// bigPicture.querySelector(".social__caption").textContent =
//   pictureList[0].description[
//     Math.floor(Math.random() * pictureList[0].description.length)
//   ];
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
var uploadCancel = imgUploadOverlay.querySelector("#upload-cancel");
var scaleMain = "1%";
//  scaleLevel.style.width;
scaleLevel.style.width = scalePin.style.left = scaleMain;

uploadFile.addEventListener("click", function () {
  imgUploadOverlay.classList.remove("hidden");
});
uploadCancel.addEventListener("click", function () {
  imgUploadOverlay.classList.add("hidden");
});
document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    imgUploadOverlay.classList.add("hidden");
  }
});
// слайдер зміни , ползунок
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
    let rightEdge = scaleLine.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    scalePin.style.left = scaleLevel.style.width = newLeft + "px";
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
  });
}

effectItems[0].addEventListener("click", function () {
  imgUploadScale.style.display = "none";
});
console.log(effectItems[1]);

effectItems.forEach((effectItem, index) => {
  effectItem.addEventListener("click", function () {
    imgUploadPreview.classList.add(effectsList[index].className);
    functionOnChangeScrool = effectsList[index].func;
    removeClassUnnesesery(index);
  });
});

// var greyScaleEffect = (effectsList[1].style.filter = "grayscale(0.5)");
// console.log(greyScaleEffect);

// var changeLevelEffect = function() {
//   scaleLevel
// }
// scaleLevel

//слайдер верхній

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

var inputWithTextHashtags = document.querySelector(".text__hashtags");
var htagsList = [];
inputWithTextHashtags.addEventListener("input", function () {
  htagsList = inputWithTextHashtags.value.split(" ");
  const latters = inputWithTextHashtags.value.split("");
  latters.forEach((latter, index) => {
    if (latter === "#" && index !== 0 && latters[index - 1] !== " ") {
      inputWithTextHashtags.setCustomValidity("go fuck off.");
    }
  });
  console.log(htagsList);
});
inputWithTextHashtags.addEventListener("invalid", function (evt) {
  if (inputWithTextHashtags.validity.tooShort) {
    inputWithTextHashtags.setCustomValidity("введите ще щось");
  } else if (inputWithTextHashtags.validity.tooLong) {
    inputWithTextHashtags.setCustomValidity("чот забагато");
  }
});

// for (let i = 0; i < htagsList.length; i++) {
//   htagsList[i].addEventListener("invalid", function (evt) {

//   });
// }

// if ((resizeControlValue.value = "100%")) {
//   imgUploadPreview.style.transform = "scale(0.)";
// } else if ((resizeControlValue.value = "75%")) {
//   imgUploadPreview.style.transform = "scale(0.75)";
// } else if ((resizeControlValue.value = "50%")) {
//   imgUploadPreview.style.transform = "scale(0.50)";
// } else {
//   imgUploadPreview.style.transform = "scale(0.25)";
// }
//map, filter, reduce, find, findIndex
// for (let i = 0; i < 6; i++) {
//   effectItems[i].addEventListener("click", function () {
//     imgUploadPreview.classList.add(effectsList[i]);
//   });
// }

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
