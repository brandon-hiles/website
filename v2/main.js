const CORS_PROXY = "https://cors-anywhere.herokuapp.com/" // Use Proxy URL to get around CORS security
const MEDIUM_URL = 'https://medium.com/feed/@brandon.j.hiles';

let parser = new RSSParser();
parser.parseURL(CORS_PROXY + MEDIUM_URL, function(err, feed) {
  length = feed.items.length
  feed.items.forEach(function(entry,index) {
    $.get(CORS_PROXY + entry.link, response => {
      let img = $(response).find('img')['1'];
      let imgSrc = $(img).attr('src').split("?")[0].replace('/max/60', '/max/400');
    if (index == length-2) { // Second most recent article
      $("#blog-link-1").attr("href", entry.link);
      $("#blog-title-1").text(entry.title);
      $("#blog-img-1").attr('style', '--url: url(' + imgSrc + ')');
    }
    if (index == length-1) { // Most recent article
      $("#blog-link-2").attr("href", entry.link);
      $("#blog-title-2").text(entry.title);
      $("#blog-img-2").attr('style', '--url: url(' + imgSrc + ')');
    }
    })
  })
})