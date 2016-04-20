function getRequest(searchTerm){
  var params = {
	part: 'snippet',
	maxResults: 6,
	key: 'AIzaSyA41PJXhkKXL0Je1kdPm_-Y4a320U58KE8', 
	q: searchTerm,
	}
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    var myData = data.items;

    }).done(function (data){

  		console.log(data);
  		data.items.map(function(item) {
    	   var id = item.id.videoId;
    	   var title = item.snippet.title;
    	   var thumbnail = item.snippet.thumbnails.high.url;
			   $('.searchResults').append("<div class='resultsContainer'><a href='http://www.youtube.com/watch?v=" + id + "'><img src='" + thumbnail + "'></a><p class='videoTitle'>" + title + "</p></div>");
	
  		});
	});
 }




$(function() {
  $('#searchTerm').on('submit', function(e) {
    e.preventDefault();
    $('.searchResults').html("");
    var searchQuery = $('#query').val(); //captures user search
    var searchResults = getRequest(searchQuery);
    //console.log(getRequest('dogs'));
    // buildThumbnailHtml(searchResults);
  })
})








