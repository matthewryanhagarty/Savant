$(document).ready(function () {
    
    var cardSection = $(".card-section");
    var carousel = $(".carousel-holder");
    
    cardSection.hide();
    carousel.show();
    renderCarousel();
    
    var searchSubmit = $("#search-submit");
    var classListBtn = $("#find-all");
    
    // Search Bar
    searchSubmit.on("click", function (event) {

        carousel.hide();
        cardSection.show();

        var searchInput = $("#search-input").val().trim();
        event.preventDefault();

        $.ajax({
            type: "GET",
            url: "/api/classes/find/" + searchInput,
            dataType: "json",
            success: function (data) {
                cardSection.empty()
                cardSection.append(`<h4 class="searchIndex"> Search Results </h4>`)                
                displayCards(data);
            }
        });


    });

    // Show All Classes
    classListBtn.on("click", function(event) {
        event.preventDefault();

        carousel.hide();
        cardSection.show();

        $.ajax({
            type: "GET",
            url: "/api/classes",
            dataType: "json",
            success: function(data) {
                cardSection.empty()
                cardSection.append(`<h4 class="searchIndex"> All Classes </h4>`)                
                displayCards(data);
            }
        })

    })

    function displayCards(data) {
        for (i = 0; i < data.length; i++) {

            if (data.length === 0) {
                var noResult = $("<h3>Unfortunately, no classes exist")
                noResult.html("Unfortunately, no classes exist")
                cardSection.append(noResult)

            } else {

                var title = data[i].title;
                var date = data[i].date;
                var description = data[i].desc;
                var category = data[i].categ;
                var youtube = data[i].liveLink;


                var button = $("<button>Add Class</button>")
                button.addClass("btn btn-outline-secondary add-class")

                var calendar = $("<img src='../assets/images/calendar.png'></img>");
                calendar.addClass("calendar");
                calendar.attr("data-title",title);
                calendar.attr("data-desc",description);
                calendar.attr("data-date", date);

                var card = $("<div>");
                card.addClass("card");

                var cardBody = $("<div>");
                cardBody.addClass("card-body");

                var cardFooter = $("<div>")
                cardFooter.addClass("card-footer");

                // cardBody.append("<h5>" + teacher + "</h5>");
                cardBody.append(`<h6> ${title} </h6>`);
                cardBody.append(`<p> <strong>Category:</strong> ${category} </p>`);
                cardBody.append(`<p> <strong>Date:</strong> ${moment(date).format("LLLL")} </p>`);
                cardBody.append(`<p> <strong>Description:</strong> ${description} </p>`);

                // cardFooter.append(button);
                cardFooter.append(calendar);

                card.append(youtube);
                card.append(cardBody);
                card.append(cardFooter);

                cardSection.append(card);

            }

        }
    } 

    // Carousel Cards
    function renderCarousel() {


        $.ajax({
            type: "GET",
            url: "/api/classes",
            dataType: "json",
            success: function (data) {
                console.log(data);
                
                // var sectionCount = 1;
                if (data.length > 0) {
                    data.length <= 9 ? lengthCards = data.length : lengthCards = 9;
                    
                    var newSection; //= $(`<div id='section${sectionCount}'>`);
                    console.log(lengthCards);

                    for (i = lengthCards; i > 0; i--) {

                        if (i >= 7) {
                            newSection = $(".carousel-item1")

                        } else if 
                        (i >= 4) {
                            newSection = $(".carousel-item2")

                        } else if
                        (i >= 1) {
                            newSection = $(".carousel-item3")

                        }

                        var title = data[i-1].title;
                        var date = data[i-1].date;
                        var description = data[i-1].desc;
                        var category = data[i-1].categ;
                        var youtube = data[i-1].liveLink;

                        var button = $("<button>Add Class</button>")
                        button.addClass("btn btn-outline-secondary add-class")

                        var calendar = $("<img src='../assets/images/calendar.png'></img>");
                        calendar.addClass("calendar");
                        calendar.attr("data-title",title);
                        calendar.attr("data-desc",description);
                        calendar.attr("data-date", date);

                        var card = $("<div>");
                        card.addClass("card");

                        var cardBody = $("<div>");
                        cardBody.addClass("card-body");

                        var cardFooter = $("<div>")
                        cardFooter.addClass("card-footer");

                        cardBody.append(`<h6> ${title} </h6>`);
                        cardBody.append(`<p> <strong>Category:</strong> ${category} </p>`);
                        cardBody.append(`<p> <strong>Date:</strong> ${moment(date).format("LLLL")} </p>`);
                        cardBody.append(`<p> <strong>Description:</strong> ${description} </p>`);

                        cardFooter.append(calendar);

                        card.append(youtube);
                        card.append(cardBody);
                        card.append(cardFooter);

                        newSection.append(card)

                    }

                }
            }
        });

    }
});
