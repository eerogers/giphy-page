$(document).ready(function() {

var characterList= ["Rachel Green", "Phoebe Buffay", "Chandler Bing", "Monica Geller", "Ross Geller", "Joey Tribbiani"]
var searcedChar = ""
newButtons()

function newButtons() {
    $("#buttons-here").empty()
    for (i=0; i< characterList.length; i++) {
        $("#buttons-here").append("<button class='btn btn-default char' id='char-button"+i+"'>")
        $("#char-button"+i).append(characterList[i])
    }
}

$(document).on("click", ".char", function() {
    $("#gifs-here").empty()
    searchedChar = $(this).text()
    var urlQuery = "https://api.giphy.com/v1/gifs/search?q="+ searchedChar +"&api_key=0BHreSVKUHEx9DxgKhaU0MTkNOI4MJUW"
    $.ajax({
        url : urlQuery,
        method: "GET"
    }).then(function(response) {
        var isStill=true
        for(i=0; i<15; i++) {
            var displayedImage = (response.data[i].images.fixed_height_still.url)
            var displayedRating = (response.data[i].rating)
            $("#gifs-here").append("<div id='gifBox'><div id='rating'>Rating: "+displayedRating+"</div>"+"<img id='mygifs' data='"+i+"' src='"+displayedImage+"'></div>")
        }
        $(document).on("click", "#mygifs", function(){
            var movingImage = response.data[$(this).attr("data")].images.fixed_height.url
            var stillImage = response.data[$(this).attr("data")].images.fixed_height_still.url
            if (isStill) {
                $(this).attr("src", movingImage)
                isStill=false
            }
            else {
                $(this).attr("src", stillImage)
                isStill = true    
            }
        })
    })
})


$("#addCharacter").on("click", function() {
    event.preventDefault()
    var newChar = ($("#character-input").val())
    characterList.push(newChar)
    newButtons()
})
})