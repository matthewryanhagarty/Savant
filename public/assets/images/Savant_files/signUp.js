//when the site loads...
$(function() {

  var signUpBtn = $("#signUp");
  var signUpError = $("#signUpError");
  //The sign up button within the page
  signUpBtn.on("click", function (event) {
    event.preventDefault();

    var name = $("#username").val().trim();
    var image = $("#image").prop("files")[0];
    var contact = $("#contactInfo").val().trim();
    var email = $("#newUserEmail").val().trim();
    var contact = $("#contactInfo").val().trim();

    var imgCreate = new FormData();
    imgCreate.append("name", name);
    imgCreate.append("file", image);
    $.ajax({
      type: "POST",
      url: "/api/image/create",
      processData: false,
      contentType: false,
      dataType: "json",
      data: imgCreate, 
      success: function(data) {
        var uid = sessionStorage.getItem("uuid-savant")
        var usr = {
          name: name,
          contact: contact,
          email: email,
          avatar: data.Location,
          uuid: uid,
          classes: "{}"
        }
        
          $.ajax({
            type: "POST",
            url: "/api/users/register",
            dataType: "json",
            data: usr, 
            success: function(data) {
                // window.location.href="/users/profile"
            }
          })
      }
    })

  })

})//end of key
