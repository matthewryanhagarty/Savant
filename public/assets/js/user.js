$(document).ready(function () {
    var classContainer = $(".class-container");
    var userProfile = $(".user-profile");

    async function getUser() {
        var uuid = await sessionStorage.getItem("uuid-savant");
        console.log(uuid);
        
        if (uuid) {
            $.get("/api/users/" + uuid, function(users) {
                console.log(users);
                // if (!users || !users.length) {
                //     displayEmpty();
                // }
                // else {
                //     initializeRows(user);
                // }
                if (users.length != 0) {
                    /*
                        Displaying username / avatar
                    */  
                    var profile = $("<div>");

                    var pic = $("<img>");
                    pic.attr("src", users.avatar);
                    pic.addClass("profilePic")

                    profile.append( pic );
                    profile.append(`<br><br>`)
                    profile.append( $("<h2>").append(users.name) );
                    profile.append( $("<p>").append(users.email) );
                    profile.append( $("<p>").append( users.contact ) );

                    userProfile.append(profile)

                     /*
                        Displaying classes being taught
                    */  
                    var uuid = sessionStorage.getItem("uuid-savant");
                    console.log(uuid);
                    
                    $.ajax({
                        type: "GET",
                        url: "/api/users/classes/" + uuid,
                        dataType: "json",
                        success: function (data) {
                            console.log("GOT CLASSES", data);
                            classContainer.append("There are " + data.length + "classes received")
                        }
                        
                    })
                }
            })
        } //else there is no matching uuid for user data 
    }
    getUser();


// function initializeRows() {
//     userContainer.empty();
//     var userToAdd = [];
//     for (var i = 0; i < classes.length; i++) {
//         userToAdd.push(createNewRow(classes[i]));
//     }
//     userContainer.append(userToAdd);
// }

// function createNewRow(user) {
//     var newUserCard = $("<div>");
//     newUserCard.addClass("card");
//     var newUserCardHeading = $("<div>");
//     newUserCardHeading.addClass("card-header");
//     var newUserName = $("<h2>");
//     newUserName.text(users.name);
//     // console.log(users.name);
//     newUserName.css({
//       float: "right",
//       "font-weight": "700",
//       "margin-top":
//       "-15px"
//     });
//     var userCardBody = $("<div>");
//     userCardBody.addClass("card-body");
//     userCardBody.append(newUserName);
//     newUserCard.append(userCardBody);
// }

// function teachingClasses() {
//     $.get("/api/users/:uuid")
// }


// function displayEmpty() {
//     userContainer.empty();
//     var messageH2 = $("<h2>");
//     messageH2.css({ "text-align": "center", "margin-top": "50px" });
//     messageH2.html("No user data to display. Please create an account or sign in.");
//     userContainer.append(messageH2);
// }

    function displayCards() {
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
                cardBody.append("<h6>" + title + "</h6>");
                cardBody.append("<p>" + category + "</p>");
                cardBody.append("<p>" + moment(date).format("LLLL") + "</p>");
                cardBody.append("<p>" + description + "</p>");

                // cardFooter.append(button);
                cardFooter.append(calendar);

                card.append(youtube);
                card.append(cardBody);
                card.append(cardFooter);

                cardSection.append(card);

            }

        }
    }
})

