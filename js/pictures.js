// var galleryOverlay = document.querySelector(".gallery-overlay");
// galleryOverlay.classList.remove("hidden");
var simlarPictureTemplate = document
  .querySelector("#picture-template")
  .content.querySelector(".picture");
var userPhoto = simlarPictureTemplate.querySelector("img");
var pictures = document.querySelector(".pictures");
for (var i = 0; i < 25; i++) {
  //   var start = 15;
  //   // var end = 200;
  //   while (start <= 200) {
  //     pictureList[0].likes.push(start++);
  //   }

  var pictureList = [
    {
      url: `photos/${i}.jpg`,
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
        "Как же круто тут кор",
        "Отдыхаем...",
        "Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......",
        "Вот это тачка!",
      ],
    },
  ];
}
var start = 15;
// var end = 200;
while (start <= 200) {
  pictureList[0].likes.push(start++);
}

while (0 <= 50) {
  pictureList[0].commentsQuantity.push(start++);
}
console.log(pictureList[0].comments[1]);
console.log(pictureList[0].likes);

// for (var i = 0; i < 25; i++) {
var renderPhotos = function (photo) {
  var photoElement = simlarPictureTemplate.cloneNode(true);
  //   var image = photoElement.querySelector("img");
  //   image.src = pictureList[0].url;
  for (var i = 0; i < 25; i++) {
    photoElement.querySelector("img").src = pictureList[0].url[i];
    //   galleryOverlay.appendChild(photoElement);
  }
  photoElement.querySelector(".picture-likes").textContent =
    pictureList[0].likes[
      Math.floor(Math.random() * pictureList[0].likes.length)
    ];

  photoElement.querySelector(".picture-comments").textContent =
    pictureList[0].commentsQuantity[
      Math.floor(Math.random() * pictureList[0].commentsQuantity.length)
    ];
  console.log(photoElement);
  return photoElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 25; i++) {
  fragment.appendChild(renderPhotos(pictureList[i]));
}
pictures.appendChild(fragment);
