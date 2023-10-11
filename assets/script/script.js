var modal = document.getElementById("authentication-modal");
var openBtn = document.getElementById("open-btn");
var closeBtn = document.getElementById("close-btn");
var searchBooksForm = document.querySelector("#search-books");
var searchBtn = document.getElementById("search-btn");
var nyUrl = 'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key='
var url = 'https://www.googleapis.com/books/v1/volumes?q='
var nyApiKey = 'bR4y42iA1GzK1cKSkAc2M2cUAGpDbTrJ';
var googleApiKey = '&key=AIzaSyCyaIcjiZ4WlpOaAKDLJVj04ytizEMCQYw';
var topSellingBooks = document.getElementById("top-shelf");




openBtn.addEventListener('click', function () {
  modal.style.display = "block";
});
// We want the modal to close when the OK button is clicked
closeBtn.addEventListener('click', function () {
  modal.style.display = "none";
});
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

function passValues() {
  var searchInput = document.getElementById("search-input").value;
  var formatInput =document.getElementById('format-input').value;
  localStorage.setItem('books', searchInput);
  localStorage.setItem('genre', formatInput)
  secondPage(); 
}

function secondPage() {
  window.location.href = 'results.html';
  console.log('bye');
};

searchBtn.addEventListener("click", function() {
event.preventDefault();
passValues();
secondPage(); 

});


fetch( nyUrl + nyApiKey)
.then(function (response) {
  return response.json();
})
.then(function (data){
    console.log(data);
    var isbn= data.results[0].isbns[0].isbn10;
    topBookThumbnail(isbn)
console.log(isbn)
})

function topBookThumbnail (isbn) {
  console.log(isbn)
  fetch(url + 'isbn:' + isbn + googleApiKey)
  .then(function (response) {
    console.log(response)
    return response.json();
  })
  .then(function (data) {
      console.log(data);
   //need to make isbn var so it matches with the ny times. 
  var thumbnail = data.items[0].volumeInfo.imageLinks.thumbnail;
  console.log(thumbnail);
for(var i = 0; i < data.items.length; i++) {
  var frontPage = document.createElement('section');
  var bookCover = document.createElement('img');
  bookCover.classList.add('my-1', 'w-5/6', 'h-4/6');
  bookCover.src = data.items[i].volumeInfo.imageLinks.thumbnail;

  topSellingBooks.append(frontPage);
  frontPage.append(bookCover);
}})}

