var modal = document.getElementById("authentication-modal");
var openBtn = document.getElementById("open-btn");
var closeBtn = document.getElementById("close-btn");
var searchBooksForm = document.querySelector("#search-books");
var searchBtn = document.getElementById("search-btn");
var nyApiKey = 'bR4y42iA1GzK1cKSkAc2M2cUAGpDbTrJ';
var googleApiKey = 'AIzaSyCyaIcjiZ4WlpOaAKDLJVj04ytizEMCQYw';

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

