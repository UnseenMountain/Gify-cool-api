


  $("button").on("click", function () {

    var game = $(this).attr("data-game");


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      game + "&api_key=qWoKMfLc0NsHroDiBTBWxz1G6XT4Qqii&limit=10";


      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        var results = response.data
        console.log(queryURL);

        console.log(response);

        var results = response.data;


        for (var i = 0; i < results.length; i++) {


          var gameDiv = $("<div>");


          var p = $("<p>").text("Rating: " + results[i].rating);


          var gameImage = $("<img>");

          gameImage.attr("src", results[i].images.fixed_height.url);


          gameDiv.append(p);
          gameDiv.append(gameImage);


          $("#gifs-appear-here").prepend(gameDiv);
        }
      });
  });

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


// function renderButtons() {


//   $("#buttons-view").empty();


//   for (var i = 0; i < games.length; i++) {


//     var a = $("<button>");

//     a.addClass("game-btn");

//     a.attr("data-game", games[i]);

//     a.text(games[i]);

//     $("#buttons-view").append(a);
//   }
// }


// $("#add-game").on("click", function(event) {
//   event.preventDefault();

//   var game = $("#game-input").val().trim();


//   games.push(game);


//   renderButtons();
// });


// $(document).on("click", ".game-btn", displayGameInfo);


// renderButtons();
