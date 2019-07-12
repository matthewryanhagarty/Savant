// search bar on-click --> display results //

$(document).ready(function () {

    renderCards();

    var searchSubmit = $("#search-input").val().trim();

    $("#search-submit").on("click", function (event) {

        event.preventDefault();

        var search = $("#search-input").val().trim();

        $.ajax({
            type: "GET",
            url: "/api/classes/find/" + search,
            dataType: "json",
            success: function (data) {

                for (i = 0; i < data.length; i++) {

                    if (data.length === 0) {
                        var noResult = $("<h3>")
                        noResult.html("Unfortunately, no classes exist")
                        $("#card-section").append(noResult)

                    } else {

                        var item = $("<div>");
                        item.addClass("item")

                        var card = $("<div>");
                        card.addClass("card");

                        var cardBody = $("<div>");
                        cardBody.addClass("card-body");

                        var teacher = data[i].teacher;
                        var title = data[i].title;
                        var date = data[i].date;
                        var description = data[i].desc;
                        var category = data[i].category;
                        var youtube = data[i].youtube;

                        cardBody.append("<h5>" + teacher + "</h5>");
                        cardBody.append("<h6>" + title + "</h6>");
                        cardBody.append("<p>" + date + "</p>");
                        cardBody.append("<p>" + description + "</p>");
                        cardBody.append("<p>" + category + "</p>");

                        card.append(youtube);
                        card.append(cardBody);

                        item.append(card);

                        $("#card-section").append(item);

                    }

                }
            }
        });


    });


});

function renderCards() {


        $.ajax({
            type: "GET",
            url: "/api/classes",
            dataType: "json",
            success: function (data) {

                for (i = 0; i < 7; i++) {

                        var item = $("<div>");
                        item.addClass("item")

                        var card = $("<div>");
                        card.addClass("card");

                        var cardBody = $("<div>");
                        cardBody.addClass("card-body");

                        var teacher = data[i].teacher;
                        var title = data[i].title;
                        var date = data[i].date;
                        var description = data[i].desc;
                        var category = data[i].category;
                        var youtube = data[i].youtube;

                        cardBody.append("<h5>" + teacher + "</h5>");
                        cardBody.append("<h6>" + title + "</h6>");
                        cardBody.append("<p>" + date + "</p>");
                        cardBody.append("<p>" + description + "</p>");
                        cardBody.append("<p>" + category + "</p>");

                        card.append(youtube);
                        card.append(cardBody);

                        item.append(card);

                        $("#card-section").append(item);

                }
            }
        });

}
