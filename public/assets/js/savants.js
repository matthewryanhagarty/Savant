// search bar on-click --> display results //

$("#search-submit").on("click", function(event) {
    
    event.preventDefault();
    
    var searchSubmit = $("#search-inpit").val().trim();

    $.ajax({
        type: "POST",
        url: "/api/search",   // <-- probably needs new url
        dataType: "json",
        data: data,
        success: function(data) {
          console.log(data);   //What the server replies with
        }
      });



    //   function searchSubmit(search) {
    //     $.post("/api/posts/", Post, function() {

            

    //     });
    
})
