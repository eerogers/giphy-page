$(document).ready(function() {

var characterList= ["Rachel Green", "Phoebe Buffay", "Chandler Bing", "Monica Geller", "Ross Geller", "Joey Tribbiani"]
for (i=0; i< characterList.length; i++) {
    $("#buttons-here").append("<button id='char-button"+i+"'>")
    $("#char-button"+i).append(characterList[i])
}
//API key: 0BHreSVKUHEx9DxgKhaU0MTkNOI4MJUW
//http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=YOUR_API_KEY
//might need to make https

})