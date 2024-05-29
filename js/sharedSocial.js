// ===================================================================================================
// SHARE SOCIAL LINKS
// =
// This code is used to generate the share social links on the article pages.
// ====
// This code uses jQuery to select the share buttons and attach click events to them.
// It also uses the encodeURIComponent() function to encode the article URL and main image URL for sharing.
// ====
// The open_window() function is used to open a new window for sharing.
// ====
// The ARTICLE_TITLE, ARTICLE_URL, and MAIN_IMAGE_URL variables are used to store the article title, URL, and main image URL for sharing.
// ====
// The share buttons are added to the HTML using the following code:
// <div class="share-buttons">
// 	<a href="#" class="share-google-plus">Google+</a>
// 	<a href="#" class="share-linkedin">LinkedIn</a>
// 	<a href="#" class="share-pinterest">Pinterest</a>
// 	<a href="#" class="share-tumblr">Tumblr</a>
// </div>
$(function() {
	const ARTICLE_TITLE =  document.title;
	const ARTICLE_URL = encodeURIComponent(window.location.href);
	const MAIN_IMAGE_URL = encodeURIComponent($('meta[property="og:image"]').attr('content'));

	$('.share-fb').click(function(){
		open_window('https://www.facebook.com/sharer/sharer.php?u='+ARTICLE_URL, 'facebook_share');
	});

	$('.share-twitter').click(function(){
		open_window('https://twitter.com/share?url='+ARTICLE_URL, 'twitter_share');
	});

	$('.share-linkedin').click(function(){
		open_window('https://www.linkedin.com/shareArticle?mini=true&url='+ARTICLE_URL+'&title='+ARTICLE_TITLE+'&summary=&source=', 'linkedin_share');
	});

	$('.share-pinterest').click(function(){
		open_window('https://pinterest.com/pin/create/button/?url='+ARTICLE_URL+'&media='+MAIN_IMAGE_URL+'&description='+ARTICLE_TITLE, 'pinterest_share');
	});
	
	$('.share-tumblr').click(function(){
		open_window('https://www.tumblr.com/share/link?url='+ARTICLE_URL+'&name='+ARTICLE_TITLE+'&description='+ARTICLE_TITLE, 'tumblr_share');
	});

	function open_window(url, name){
		window.open(url, name, 'height=320, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no');
	}
});