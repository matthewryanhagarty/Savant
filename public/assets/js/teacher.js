//When the site loads...
$(function() {

  /*
    Global Variables
  */

 console.log(firebase.apps);
  

  var submitBtn = $("#class-submit");
  var submitError = $("#submitError")
  var classTitle = $("#classTitle");
  var classDesc = $("#classDesc");
  var classCateg = $("#classCateg");
  var classTime = $("#classTime");
  var ytLink = $("#ytLink");
  
  submitBtn.on("click", function(event) {
    event.preventDefault();

    //validations
    var uuid = sessionStorage.getItem("uuid-savant");
    
    var warnPrompt = "";
    if (!uuid) warnPrompt += "You need to sign in!\n"
    if (!classTitle) warnPrompt += "Add a title\n"
    if (!classDesc) warnPrompt += "Add a description\n"
    if (!classCateg) warnPrompt += "Choose a category\n"
    if (!classTime) warnPrompt += "Add a class timing\n"
    if (!ytLink) warnPrompt += "Add your youtube embed\n";
    
    
    if (warnPrompt == "") {

      $.ajax({
        type: "GET",
        url: "/classes/register",
        dataType: "json",
        data: {
          title: classTitle,
          desc: classDesc,
          date: classTime,
          liveLink: ytLink,
          categ: classCateg,
          teacher: uuid
        }, success: function (data) {
          console.log(data);
        }
      });

    }
    else {
      submitError.text(warnPrompt);
    }

  })//End of submit btn

})//End of ready