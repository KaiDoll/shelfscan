var modal = document.getElementById("authentication-modal");
var openBtn = document.getElementById("open-btn");
var closeBtn = document.getElementById("close-btn");
var searchBooksForm = document.querySelector("#search-books");
var searchBtn = document.getElementById("search-btn");
var nyApiKey = 'bR4y42iA1GzK1cKSkAc2M2cUAGpDbTrJ';
var googleApiKey = 'AIzaSyCyaIcjiZ4WlpOaAKDLJVj04ytizEMCQYw';

// var searchButton = document.getElementById("search-btn");//future use
openBtn.onclick = function () {
  modal.style.display = "block";
};
// We want the modal to close when the OK button is clicked
closeBtn.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function passValues() {
  localStorage.setItem("books", searchInput);
  localStorage.setItem("genre", formatInput);
  secondPage();
}

function secondPage() {
  window.location.href = "results.html";
  console.log("bye");
}

var url = "https://www.googleapis.com/books/v1/volumes?q=";
searchBtn.addEventListener("submit", function (event) {
  event.preventDefault()
  var searchInput = document.getElementById("search-input").value;
  var formatInput = document.getElementById("format-input").value;
  console.log(searchInput, formatInput);
  // passValues();
  // secondPage();
  fetch(url + formatInput + "+" + searchInput) //fetch is working 
  .then(function (response) {
    console.log(response);
    return response.json();  
  })
  .then(function (data) {
console.log(data);
  localStorage.setItem('data', JSON.stringify(data.items));
  window.location.href = "results.html";
  });
});
// added prevent default so it does not refresh.

var books = localStorage.getItem("books");
var genre = localStorage.getItem("genre");
var results = document.getElementById("results");



// fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' + nyApiKey, {
//     method: 'get',
//   })
//   .then(response => { return response.json(); })
//   .then(json => { console.log(json); });

//   fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:1649374046&key=' + googleApiKey, {
//     method: 'get'
//   })
//   .then(response => { return response.json(); })
//   .then(json => { console.log(json); });
