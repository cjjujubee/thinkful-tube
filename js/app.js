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

    // myData.map(function(item) {
    // 	console.log(item.snippet.title)
    // });
    // $.each(myData, function(index, value){
    //   console.log(value.title);
    // });
    // console.log(data.items[0].snippet.title);
    // console.log(myData);
    // var videoTitle = data.items[0].snippet.title
    // var videoId = data.items[0].id.videoId; //gets videoId


    }).done(function (data){

  		console.log(data);
  		data.items.map(function(item) {
    	  var id = item.id.videoId;
    	  var title = item.snippet.title;
    	  var thumbnail = item.snippet.thumbnails.default.url;
			$('.searchResults').append("<div><a href='http://www.youtube.com/watch?v=" + id + "'><img class='col-xs-6 col-sm-2' src='" + thumbnail + "'></a><label class='videoTitle'>" + title + "</label></div>");

	
  		});
	});
 }




$(function() {
  $('#searchTerm').on('submit', function(e) {
    e.preventDefault();
    var searchQuery = $('#query').val(); //captures user search
    var searchResults = getRequest(searchQuery);
    //console.log(getRequest('dogs'));
    // buildThumbnailHtml(searchResults);
  })
})








