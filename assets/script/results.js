var url = 'https://www.googleapis.com/books/v1/volumes?q='
var books = localStorage.getItem('books');
var genre = localStorage.getItem('genre');
var results = document.getElementById('results');

// 

fetch(url + genre + '+' + books)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
        for(var i = 0; i < 10; i++) {
            var article = document.createElement('section');
            var cover = document.createElement('img');
            var title = document.createElement('p');
            var left = document.createElement('section');
            var author = document.createElement('p');
            var discription = document.createElement('p');
            var link = document.createElement('a');
            var right = document.createElement('section');

            left.classList.add('flex', 'flex-col', 'w-2/6', 'px-1')
            right.classList.add('flex', 'flex-col', 'w-4/6')
            article.classList.add('flex', 'flex-row', 'my-2', 'mx-6' ,'border-solid' ,'border-2' ,'border-black' ,'rounded-md');
            author.classList.add('my-1');
            discription.classList.add('my-1');
            title.classList.add('my-1');
            link.classList.add('my-1');
            cover.classList.add('my-1');

            console.log(data.items[i].volumeInfo.infoLink)
            author.textContent = data.items[i].volumeInfo.authors[0];
            discription.textContent = data.items[i].volumeInfo.description;
            title.textContent = data.items[i].volumeInfo.title;
            link.textContent = data.items[i].volumeInfo.infoLink;

            results.append(article);
            article.append(left);
            article.append(right);
            // left.append(cover);
            left.append(title);
            right.append(author);
            right.append(discription);
            right.append(link);
        }});

