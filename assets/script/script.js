var modal = document.getElementById("authentication-modal");
var openBtn = document.getElementById("open-btn");
var closeBtn = document.getElementById("close-btn");
var searchBooksForm = document.querySelector('#search-books');
var searchBtn = document.getElementById("search-btn");

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
console.log(searchBtn)
searchBtn.addEventListener("click", function() {
passValues();
secondPage(); 
});


//add event listener to activate the change page function. 



// function handleSearchBooksForm(event) {
//   event.preventDefault();

//   var searchInput =document.querySelector('#search-input').value;
//   var formatInput =document.querySelector('#format-input').value;

//   if (!searchInput) {
//     console.error('We need a book name please!');
//     return;
//   } 

//   // var searchingResult = 
// }