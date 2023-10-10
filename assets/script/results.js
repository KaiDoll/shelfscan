var url = 'https://www.googleapis.com/books/v1/volumes?q='
var books = localStorage.getItem('books');
var genre = localStorage.getItem('genre');
var results = document.getElementById('results');

//     fetch('https://api.nytimes.com/svc/books/v3/reviews.json?title=Othello-key=bR4y42iA1GzK1cKSkAc2M2cUAGpDbTrJ')
//   .then(response => { return response.json(); })
//   .then(json => { console.log(json); });


fetch(url + genre + '+' + books)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
        for(var i = 0; i < 10; i++) {
            var article = document.createElement('section')
            var author = document.createElement('p')
            var discription = document.createElement('p')
            var title = document.createElement('p')
            var link = document.createElement('a')
            var cover = document.createElement('img')


            article.classList.add('flex', 'flex-row', 'my-2', 'mx-6' ,'border-solid' ,'border-2' ,'border-black' ,'rounded-md');
            author.classList.add('my-1', 'w-5/6');
            discription.classList.add('my-1', 'w-5/6');
            title.classList.add('my-1', 'w-1/6');
            link.classList.add('my-1', 'w-5/6');
            cover.classList.add('my-1', 'w-1/6');

            // article.setAttribute('id', "articleBox");
            console.log(data.items[i].volumeInfo.infoLink)
            author.textContent = data.items[i].volumeInfo.authors[0];
            discription.textContent = data.items[i].volumeInfo.description;
            title.textContent = data.items[i].volumeInfo.title;
            link.textContent = data.items[i].volumeInfo.infoLink;

            results.append(article);
            // article.append(cover);
            article.append(title);
            article.append(author);
            article.append(discription);
            article.append(link);
        }
    });

