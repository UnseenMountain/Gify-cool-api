// var games = ["Mass Effect", "Borderlands 3",  "Sonic Generations", "SuperNova"]
// function displayGif(){
//     var games = $(this).attr("data-name")
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         game + "&api_key=qWoKMfLc0NsHroDiBTBWxz1G6XT4Qqii&limit=10";

//         $.ajax({

//             url: queryURL,
//             method: "GET" 
//         }).then(function(response){
//             var results =  response.data
//         })
//     }


    $("button").on("click", function() {
        
        var game = $(this).attr("data-game");
  
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        game + "&api_key=qWoKMfLc0NsHroDiBTBWxz1G6XT4Qqii&limit=10";
  
        
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          
          .then(function(response) {
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