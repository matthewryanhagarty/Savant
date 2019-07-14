//When the site loads...
$(function() {

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

    //validations
    var uuid = sessionStorage.getItem("uuid-savant");
    
    var warnPrompt = "";
    var dateTime = moment(classTime, "MM-DD-YYYY HH:mm a");
    if (!uuid) warnPrompt += "You need to sign in!\n"
    if (!classTitle) warnPrompt += "Add a title\n"
    if (!classDesc) warnPrompt += "Add a description\n"
    if (!classCateg) warnPrompt += "Choose a category\n"
    if (!classTime) warnPrompt += "Add a class timing\n"
    if (!dateTime) warnPrompt += "Please re-select your date & time for the proper format!"
    
    var sendObj = {
      title: classTitle,
      desc: classDesc,
      date: new Date(dateTime),
      categ: classCateg,
      teacher: uuid
    };

    console.log(sendObj);
    
    if (warnPrompt == "") {
      
      $.ajax({
        type: "POST",
        url: "/classes/register",
        dataType: "json",
        data: sendObj, success: function (data) {
          console.log(data);
          if (data.status) location.href="/"
//TODO    redirect to profile instead
        }
      });

    }
    else {
      submitError.text(warnPrompt);
    }

  })//End of submit btn

})//End of ready