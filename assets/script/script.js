var modal = document.getElementById("authentication-modal");
var openBtn = document.getElementById("open-btn");
var closeBtn = document.getElementById("close-btn");
var searchBooksForm = document.querySelector("#search-books");
var searchBtn = document.getElementById("search-btn");
var nyUrl =
  "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=";
var url = "https://www.googleapis.com/books/v1/volumes?q=";
var nyApiKey = "bR4y42iA1GzK1cKSkAc2M2cUAGpDbTrJ";
var googleApiKey = "&key=AIzaSyCyaIcjiZ4WlpOaAKDLJVj04ytizEMCQYw";


openBtn.addEventListener("click", function () {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

function passValues() {
  var searchInput = document.getElementById("search-input").value;
  var formatInput = document.getElementById("format-input").value;
  localStorage.setItem("books", searchInput);
  localStorage.setItem("genre", formatInput);
  secondPage();
}

function secondPage() {
  window.location.href = "results.html";
  console.log("bye");
}

searchBtn.addEventListener("click", function () {
  event.preventDefault();
  passValues();
  secondPage();
});

fetch(nyUrl + nyApiKey)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var isbn = data.results[0].isbns[0].isbn10;
    var isbn1 = data.results[1].isbns[0].isbn10;
    var isbn2 = data.results[2].isbns[0].isbn10;
    topBookThumbnail(isbn);
    topBookThumbnail1(isbn1);
    topBookThumbnail2(isbn2);
  });

function topBookThumbnail(isbn) {
  console.log(isbn);
  fetch(url + "isbn:" + isbn + googleApiKey)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var thumbnail = data.items[0].volumeInfo.imageLinks.thumbnail;
      console.log(thumbnail);

        var img = document.createElement("img");
        img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
        document.getElementById("top-shelf1").appendChild(img);
        img.classList.add(
          "mx-auto",
          "px-4",
          "w-80",
          "h-auto",
          "border-black",
          "border-2",
          "bg-slate-50"
        );
      
    });
}


function topBookThumbnail1(isbn1) {
  console.log(isbn1);
  fetch(url + "isbn:" + isbn1 + googleApiKey)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //need to make isbn var so it matches with the ny times.
      var thumbnail = data.items[0].volumeInfo.imageLinks.thumbnail;
      console.log(thumbnail);
      // for (var i = 0; i < data.items.length; i++) {
      var img = document.createElement("img");
      img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
      document.getElementById("top-shelf2").appendChild(img);
      img.classList.add(
        "mx-auto",
        "px-4",
        "w-80",
        "h-auto",
        "border-black",
        "border-2",
        "bg-slate-50"
      );
    });
}

function topBookThumbnail2(isbn2) {
  console.log(isbn2);
  fetch(url + "isbn:" + isbn2 + googleApiKey)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //need to make isbn var so it matches with the ny times.
      var thumbnail = data.items[0].volumeInfo.imageLinks.thumbnail;
      console.log(thumbnail);
      // for (var i = 0; i < data.items.length; i++) {
        var img = document.createElement("img");
        img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
        document.getElementById("top-shelf3").appendChild(img);
        img.classList.add(
          "mx-auto",
          "px-4",
          "w-80",
          "h-auto",
          "border-black",
          "border-2",
          "bg-slate-50"
        );
    });
}
