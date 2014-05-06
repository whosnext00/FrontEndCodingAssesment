var imgresults = [], start = 0;
jQuery(document).ready(function($) {
	function getImg(startNumber){
	    $.getJSON("https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=giftcards.com&rsz=8?v=1.0&q=giftcards.com&rsz=8", function(results){
	        imgresults.push(results.responseData.results);
	        if(imgresults.length < 538){
	            start = start + 4;
	            getImg(start);
	        } else {
	            stop();
	        }
	    });
	}
	getImg(start);
});