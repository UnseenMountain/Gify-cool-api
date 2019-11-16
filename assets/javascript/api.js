



var games = ["Sonic Generations", "Doom", "Cyberpunk 2077"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayGameInfo() {

  var game = $(this).attr("data-game");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        game + "&api_key=qWoKMfLc0NsHroDiBTBWxz1G6XT4Qqii&limit=10";

  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    
    var gameDiv = $("<div>");
    // Creating a div to hold the game
    var gameDiv = $("<div class='game'>");

    // Storing the rating data
    var rating = response.Rated;

    // Creating an element to have the rating displayed
    var p = $("<p>").text("Rating: " + rating);

    // Displaying the rating
    gameDiv.append(p);

    // Retrieving the URL for the image
    var images = $("<img>");

    // Creating an element to hold the image
   images.attr("src", images.fixed_height.url);

    // Appending the image
    gameDiv.append(image);

    
    $("#gifs-appear-here").prepend(gameDiv);
  });

}


function renderButtons() {

  
  $("#buttons-view").empty();

  
  for (var i = 0; i < games.length; i++) {

    
    var a = $("<button>");
  
    a.addClass("game-btn");
    
    a.attr("data-game", games[i]);
    
    a.text(games[i]);
    
    $("#buttons-view").append(a);
  }
}


$("#add-game").on("click", function(event) {
  event.preventDefault();
  
  var game = $("#game-input").val().trim();

  
  games.push(game);

  
  renderButtons();
});


$(document).on("click", ".game-btn", displayGameInfo);


renderButtons();



    
   