var url = 'https://www.googleapis.com/books/v1/volumes?q='
var books = localStorage.getItem('books');
var genre = localStorage.getItem('genre');
var results = document.getElementById('results');
var search = document.getElementById('search-input')

fetch(url + genre + '+' + books)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);

        for(var i = 0; i < 10; i++) {
            var article = document.createElement('section');
            var cover = document.createElement('img');
            var title = document.createElement('h1');
            var left = document.createElement('section');
            var author = document.createElement('p');
            var discription = document.createElement('p');
            var linktext = document.createElement('a');
            var right = document.createElement('section');

            left.classList.add('flex', 'flex-col', 'w-2/6', 'px-1')
            right.classList.add('flex', 'flex-col', 'w-4/6')
            article.classList.add('flex', 'flex-row', 'my-2', 'mx-6' ,'border-solid' ,'border-2' ,'border-black' ,'rounded-md', 'article-text');
            author.classList.add('my-1');
            discription.classList.add('my-1');
            title.classList.add('my-1');
            linktext.classList.add('my-1');
            cover.classList.add('my-1', 'w-5/6', 'h-4/6');
            linktext.href = data.items[i].volumeInfo.infoLink;
            cover.src = data.items[i].volumeInfo.imageLinks.thumbnail;

            console.log(data.items[i].volumeInfo.imageLinks.thumbnail);
            author.textContent = data.items[i].volumeInfo.authors[0];
            discription.textContent = data.items[i].volumeInfo.description;
            title.textContent = data.items[i].volumeInfo.title;
            linktext.textContent = data.items[i].volumeInfo.infoLink;

            results.append(article);
            article.append(left);
            article.append(right);
            left.append(title);
            left.append(cover);
            right.append('author:' , author);
            right.append('Summary: ' , discription);
            right.append('For more information: ' , linktext);
        }
    });

function passValues() {
    var searchInput = document.getElementById("search-input").value;
    var formatInput =document.getElementById('format-input').value;
    localStorage.setItem('books', searchInput);
    localStorage.setItem('genre', formatInput)
};

search.addEventListener('click', passValues);