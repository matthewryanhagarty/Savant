// search bar on-click --> display results //

$(document).ready(function() {

    var cardContainer = $(".wrapper");
    var searchSubmit = $("#search-input").val().trim();

$("#search-submit").on("click", function(event) {
    
    event.preventDefault();
    
    var search = $("#search-input").val().trim();

    $.ajax({
        type: "POST",
        url: "/api/classes",   // <-- probably needs new url
        dataType: "json",
        data: data,   // -- neccesary?
        success: function(data) {

            for (i = 0; i < data.length; i++) {

                if (data.length === 0) {
                    var noResult = $("<h1>")
                    noResult.css("font-size", "30px")
                    noResult.html("Unfortunately, no classes exist ")
                    $("#card-section").append(noResult)

                } else {

                var item = $("<div>");
                item.addClass("item")

                var card = $("<div>");
                card.addClass("card");

                var cardBody = $("<div>");
                cardBody.addClass("card-body");

                var button = $("<button>");
                button.addClass("youtube-btn");

                var name = data[i].name;
                var email = data[i].email;
                var 





            }


        }
      });



    
});


})





// function getCards(search) {
//     var searchString = search || "";
//     if (searchString) {
//       searchString = "/classes/" + searchString;
//     }
//     $.get("/api/posts" + searchString, function(data) {
//       console.log("Posts", data);
//       posts = data;
//       if (!posts || !posts.length) {
//         displayEmpty();
//       }
//       else {
//         initializeRows();
//       }
//     });
//   }