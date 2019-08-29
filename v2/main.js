const CORS_PROXY = "https://cors-anywhere.herokuapp.com/" // Use Proxy URL to get around CORS security
const MEDIUM_URL = 'https://medium.com/feed/@brandon.j.hiles';


let parser = new RSSParser();
parser.parseURL(CORS_PROXY + MEDIUM_URL, function(err, feed) {
  console.log(feed)
  feed.items.forEach(function(entry) {
    console.log(entry)
    let link = entry.link;
    $("#blog-link-1").attr("href", link);
    $("#blog-link-2").attr("href", link);
    $("#blog-title-1").text(entry.title);
    $("#blog-title-2").text(entry.title);
    $.get(CORS_PROXY + link, response => {
      let img = $(response).find('img')['1'];
      let imgSrc = $(img).attr('src').split("?")[0].replace('/max/60', '/max/400');

      $("#blog-img-1").attr('style', '--url: url(' + imgSrc + ')');
      $("#blog-img-2").attr('style', '--url: url(' + imgSrc + ')');
    })
  })
})