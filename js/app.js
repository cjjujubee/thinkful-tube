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
    console.log(data);
    var videoTitle = data.items[0].snippet.title
    var videoId = data.items[0].id.videoId; //gets videoId
  });
}