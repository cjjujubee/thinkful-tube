var params = {
	part: 'snippet',
	key: 'AIzaSyA41PJXhkKXL0Je1kdPm_-Y4a320U58KE8', 
	q: '',
	url: 'https://www.googleapis.com/youtube/v3/search'
}

function getRequest(searchTerm){
  var params = {
	part: 'snippet',
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
    var videoObjects = [];
    myData.map(function(item) {
      var id = item.id.videoId;
      var title = item.snippet.title;
      var thumbnail = item.snippet.thumbnails.url;

      videoObjects.push({id: id, title: title, thumbnail: thumbnail});
    })
    // console.log(videoObjects);
    return videoObjects;
  });
}

var buildThumbnailHtml = function(videoObjects) {
  console.log(videoObjects);
  for (var i = 0; i < videoObjects.length; i++) {
    $('#searchResults').append('<img src="' + videoObjects[i].thumbnail + '">')
  }
}

$(function() {
  $('#searchTerm').on('submit', function(e) {
    e.preventDefault();
    var searchResults = getRequest($('#query').val());
    console.log(searchResults);
    buildThumbnailHtml(searchResults);
  })
})








