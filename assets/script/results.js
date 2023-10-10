var url = 'https://www.googleapis.com/books/v1/volumes?q=murder'
var search = localStorage.getItem('key')
var results = document.getElementById('results')

//     fetch('https://api.nytimes.com/svc/books/v3/reviews.json?title=Othello-key=bR4y42iA1GzK1cKSkAc2M2cUAGpDbTrJ')
//   .then(response => { return response.json(); })
//   .then(json => { console.log(json); });


fetch(url + search)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        for(var i = 0; i < 10; i++) {
            var article = document.createElement('section').classList.add('flex flex-col my-2 mx-6 border-solid border-2 border-black rounded-md');
            var author = document.createElement('p').classList.add('my-1 w-5/6');
            var discription = document.createElement('p').classList.add('my-1 w-5/6');
            var title = document.createElement('p').classList.add('my-1 w-5/6');
            var link = document.createElement('a').classList.add('my-1 w-5/6');
            var cover = document.createElement('img').classList.add('my-1 w-1/6');

            article.setAttribute("id","articleBox" + i);

            author.textContent = data[i].authors;
            discription.textContent = data[i].description;
            title.textContent = data[i].title;
            link.textContent = data[i].infolink;

            results.append(article);
            cover.append('articleBox' + i);
            title.append('articleBox' + i);
            author.append('articleBox' + i);
            discription.append('articleBox' + i);
            link.append('articleBox' + i);
        }
    });

