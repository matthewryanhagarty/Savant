//When the site loads...

$(function() {
// import {authenticate} from './youtube-api.js';
// let authenticate = authenticate();
  /*
    Global Variables
  */


 console.log(firebase.apps);


  var submitBtn = $("#class-submit");
  var submitError = $("#submitError")

  submitBtn.on("click", function(event) {
    event.preventDefault();
    var classTitle = $("#classTitle").val().trim();
    var classDesc = $("#classDesc").val().trim();
    var classCateg = $("#classCateg").val().trim();
    var classTime = $("#classTime").val().trim();
    var embed = $("#embed-link").val();

    //validations
    var uuid = sessionStorage.getItem("uuid-savant");
    
    var warnPrompt = "";
    var dateTime = moment(classTime, "MM-DD-YYYY HH:mm a");
    if (!uuid) warnPrompt += "You need to sign into our website! (Top left).\n"
    if (!classTitle) warnPrompt += "Add a title\n"
    if (!classDesc) warnPrompt += "Add a description\n"
    if (!classCateg) warnPrompt += "Choose a category\n"
    // if (!classTime) warnPrompt += "Add a class timing\n"
    if (!dateTime) warnPrompt += "Please re-select your date & time for the proper format!"
    console.log("embed on submit", embed);
    var sendObj = {
      title: classTitle,
      desc: classDesc,
      date: new Date(dateTime),
      categ: classCateg,
      teacher: uuid,
      liveLink: embed
    };

    console.log(sendObj);
    
    if (warnPrompt == "") {
      
      $.ajax({
        type: "POST",
        url: "/classes/register",
        dataType: "json",
        data: sendObj, success: function (data) {
          console.log(data);
          if (data.status) 
          window.location.href="/users/profile"

        }
      });

    }
    else {
      submitError.text(warnPrompt);
    }

  })//End of submit btn

})//End of ready