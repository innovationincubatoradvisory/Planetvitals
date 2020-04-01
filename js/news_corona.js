let dt = '<div class="col-lg-4 col-md-6 content-item" data-aos="fade-up">'
fetch('https://newsapi.org/v2/top-headlines?q=corona&sources=bbc-news&apiKey=5b67480ba15d44889bbfcbf108d596ef')
  .then(response => {
    return response.json()
  })
  .then(data => {
    articles = data.articles
    if (articles && articles.length) {
      articles.forEach(item => {
        document.getElementById("news-row").innerHTML += dt + '<span><img class="lazyload" data-src="' + item.urlToImage + '"width="80%"><h4>' + item.title + "</h4><p>" + item.description + '<a href="' + item.url + '">Read More</a></p></div>';
      });
    }

  })
  .catch(err => {
    // Do something for an error here
  })