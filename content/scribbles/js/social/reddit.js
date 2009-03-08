(function() {
var write_string='<iframe src="http://reddit.com/button_content?t=2&url=';
if (window.reddit_url)  { write_string += encodeURIComponent(reddit_url); }
else { write_string += encodeURIComponent('None');}
if (window.reddit_title) { write_string += '&title=' + encodeURIComponent(reddit_title); }
if (window.reddit_css) { write_string += '&css=' + encodeURIComponent(reddit_css); }
write_string += '" height="80" width="52" scrolling="no" frameborder="0"></iframe>';
document.write(write_string);
})()
