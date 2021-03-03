(function () {
  //валідація
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
})();
