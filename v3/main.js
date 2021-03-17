// Customized Proxy Server to avoid the annoying CORS Issues.
const PROXY_URL = "https://serene-roentgen-3287a4.netlify.app/.netlify/functions/api/blog"

let parser = new RSSParser();
parser.parseURL(PROXY_URL, function(err, feed) {
  length = feed.items.length
  feed.items.forEach(function(entry,index) {
    if (entry.title === 'Data Mining with Python3' ) { // Most recent article
      $("#blog-link-1").attr("href", entry.link);
      $("#blog-title-1").text(entry.title);
      $("#blog-img-1").attr('style', '--url: url(https://miro.medium.com/max/400/0*mGjwfxQlhPu2_zih)');
    }
    if (entry.title === 'History of Asynchronous Javascript') { // Second Most recent article
      $("#blog-link-2").attr("href", entry.link);
      $("#blog-title-2").text(entry.title);
      $("#blog-img-2").attr('style', '--url: url(https://miro.medium.com/max/400/1*bhWrEhpSdKU0BvmuaIXjzw.png)');
    }
  })
})