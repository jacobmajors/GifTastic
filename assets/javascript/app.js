//initial array

var tv = ["The Young Pope", "The Sopranos", "The Wire", "Breaking Bad", "Treme", "Mad Men", "Deadwood", "Six Feet Under", "Curb Your Enthusiasm", "Hello Ladies", "Seinfeld", "The Walking Dead", "Hell On Wheels", "Band of Brothers", "Suburra", "Freaks and Geeks", "Game of Thrones", "Rome", "Dexter", "True Detective", "Lonesome Dove"];

//function to get each string in the array to display as a button
function displayButtons() {
$("tv-show-buttons").empty();

for (var i = 0; i < tv.length; i++) {
    var button = $("<button>");
    button.addClass("showButtons");
    button.attr("shows", tv[i]);
    button.text(tv[i]);

    $("#tv-show-buttons").append(button);
    }
}

//function to get user input to be added to the array
$("#add-tv-show").on("click", function(event) {
    event.addShow();

    var show = $("#tv-show-input").val();
    tv.push(show);
    $("#tv-show-input").val("");
    displayButtons();
});

//function to grab 10 gifs from the API
function getGifs(showGifs){

    var showAPI = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + showGifs + "&limit=10&rating";

    $.ajax({
        method: "GET",
        url: showAPI,
    })
    //show results
    .done(function(result) {
        var results = result.data;
    })
}

$(document).ready(function() {
    displayButtons();
})

//need a function to animate the gifs upon clicking and to also stop the animation upon re-clicking

//need click events for clicking on the gifs


