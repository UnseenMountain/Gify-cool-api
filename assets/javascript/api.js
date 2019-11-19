var games = ["Sonic Generations", "Doom", "Cyberpunk 2077"];


function displayGameInfo() {

  var game = $(this).attr("data-game");
  console.log(game);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    game + "&api_key=qWoKMfLc0NsHroDiBTBWxz1G6XT4Qqii&limit=10";

console.log(queryURL)
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    
    var results = response.data;


        for (var i = 0; i < results.length; i++) {


          var gameDiv = $("<div>");
          var gameDiv = $("<div class='game'>");

          var p = $("<p>").text("Rating: " + results[i].rating);


          var gameImage = $("<img>");

          gameImage.attr("src", results[i].images.fixed_height.url);


          gameDiv.append(p);
          gameDiv.append(gameImage);


          $("#gifs-appear-here").prepend(gameDiv);
        }
    
    
    // var gameDiv = $("<div>");
    // // Creating a div to hold the game
    // var gameDiv = $("<div class='game'>");

    // // Storing the rating data
    // var rating = response.Rated;

    // // Creating an element to have the rating displayed
    // var p = $("<p>").text("Rating: " + rating);

    // // Displaying the rating
    // gameDiv.append(p);

    // // Retrieving the URL for the image
    // var images = $("<img>");

    // // Creating an element to hold the image
    // images.attr("src", images.fixed_height.url);

    // // Appending the image
    // gameDiv.append(image);


    // $("#gifs-appear-here").prepend(gameDiv);
  });

};


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


$("#add-game").on("click", function (event) {
  event.preventDefault();
  var game = $("#game-input").val().trim();
  games.push(game);
  renderButtons();
});
$(document).on("click", ".game-btn", displayGameInfo);
renderButtons();



























// var games = [""]

//   $("button").on("click", function () {

//     var game = $(this).attr("data-game");


//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       game + "&api_key=qWoKMfLc0NsHroDiBTBWxz1G6XT4Qqii&limit=10";


//       $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function (response) {
//         var results = response.data
//         console.log(queryURL);

//         console.log(response);

//         var results = response.data;


//         for (var i = 0; i < results.length; i++) {


//           var gameDiv = $("<div>");


//           var p = $("<p>").text("Rating: " + results[i].rating);


//           var gameImage = $("<img>");

//           gameImage.attr("src", results[i].images.fixed_height.url);


//           gameDiv.append(p);
//           gameDiv.append(gameImage);


//           $("#gifs-appear-here").prepend(gameDiv);
//         }
//       });
//   });

// function renderButtons(){
//     $("#buttons-view").empty();

//     for(var i = 0; i< games.length; i++){
//         var a = $("<button>");

//         a.addClass("game-btn");

//         a.attr("data-name", games[i]);

//         a.text(games[i]);

//         $("#buttons-view").append(a);
//     }

// } 


// $("#add-game").on("click", function(event) {
//   event.preventDefault();

//   var game = $("#game-input").val().trim();


//   games.push(game);


//   renderButtons();
// });


// $(document).on("click", ".game-btn", displayGameInfo);


// renderButtons();
