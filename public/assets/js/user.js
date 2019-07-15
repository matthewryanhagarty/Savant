$(document).ready(function () {
    var userContainer = $(".user-container");
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

                }
            })
        }
    }
    getUser();


function initializeRows() {
    userContainer.empty();
    var userToAdd = [];
    for (var i = 0; i < classes.length; i++) {
        userToAdd.push(createNewRow(classes[i]));
    }
    userContainer.append(userToAdd);
}

function createNewRow(user) {
    var newUserCard = $("<div>");
    newUserCard.addClass("card");
    var newUserCardHeading = $("<div>");
    newUserCardHeading.addClass("card-header");
    var newUserName = $("<h2>");
    newUserName.text(users.name);
    // console.log(users.name);
    newUserName.css({
      float: "right",
      "font-weight": "700",
      "margin-top":
      "-15px"
    });
    var userCardBody = $("<div>");
    userCardBody.addClass("card-body");
    userCardBody.append(newUserName);
    newUserCard.append(userCardBody);
}

function teachingClasses() {
    $.get("/api/users/:uuid")
}


function displayEmpty() {
    userContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No user data to display. Please create an account or sign in.");
    userContainer.append(messageH2);
}
})

