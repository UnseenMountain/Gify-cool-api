var games = ["Mass Effect", "Borderlands 3",  "Sonic Generations", "SuperNova"]
function displayGif(){
    var games = $(this).attr("data-name")
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        games + "&api_key=qWoKMfLc0NsHroDiBTBWxz1G6XT4Qqii&limit=10";

        $.ajax({

            url: queryURL,
            method: "GET" 
        }).then(function(response){
            var results =  response.data
        })
    }