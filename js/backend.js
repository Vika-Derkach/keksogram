//upload.js
(function () {
  var URL = "https://javascript.pages.academy/kekstagram";
  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function () {
      onSuccess(xhr.response);
    });
    xhr.open("POST", URL);
    xhr.send(data);
  };
})();

//load

(function () {
  var URL = "https://javascript.pages.academy/kekstagram/data";
  window.load = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = "json";

    xhr.addEventListener("load", function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError("Статус ответа: " + xhr.status + " " + xhr.statusText);
      }
    });
    xhr.addEventListener("error", function () {
      onError("пройзошла ошибка сойденения");
    });
    xhr.addEventListener("timeout", function () {
      onError("запрос не встиг виповнитися за " + xhr.timeout + "мс");
    });

    xhr.timeout = 10000;

    xhr.open("GET", URL);
    xhr.send();
  };
})();
