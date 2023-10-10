var modal = document.getElementById("authentication-modal");
var openBtn = document.getElementById("open-btn");
var closeBtn = document.getElementById("close-btn");
var searchBooksForm = document.querySelector('#search-books');

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
