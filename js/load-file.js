(function () {
  var FILE_TYPES = ["gif", "jpg", "jpeg", "png"];

  var fileChooser = document.querySelector(
    ".img-upload__start input[type=file]"
  );
  var preview = document.querySelector(".img-upload__preview img");
  // var setupOpenIcon = document.querySelector(".setup-open-icon");
  // var imgUploadInput = document.querySelector(".img-upload__input");

  fileChooser.addEventListener("change", function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        preview.src = reader.result;
        //   setupOpenIcon.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
