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
