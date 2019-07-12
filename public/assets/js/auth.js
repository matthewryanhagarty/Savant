//When the site loads...
$(function() {

  /*
     Global Variables
  */

  var loginBtn = $("#signIn");
  var signUpBtn = $("#signUp");
  var signInModal = $("#signInModal");
  var signInError = $("#signInError");
  var navSignInOut = $("#navSignInOut");



  //Load in the key from the server
  $.get("/api/key", function(firebaseConfig) {
    // Initialize Firebase and auth connections
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    /**
     * 
     * @param {Object} values is the email and password pair the user inputted to sign in.
     * 
     * Function creates the user based on the values and sends the new profile to the server.
     */
    function createUser(values) {
      auth.createUserWithEmailAndPassword(values.email, values.pass).then(user => {
        //Do something when user logs in for the first time
        console.log(user);
        $.post("/api/users/register", {email: values.email, uuid: user.uid}, function(data) {
          console.log(data);
          signInModal.hide("slow");
        })
      }).catch(err => {
        if (err.code === "auth/weak-password") {signInError.text(err.message)}
        else if (err.code === "auth/email-already-in-use") { signInError.text("This email is already in use! Try logging in...") }
      })
    }

    /**
     * 
     * @param {Object} values is the email and password pair the user inputted to sign in.
     * 
     * Function logs the user in based on the values. Once completed, the state changed event listener is ran.
     */
    function signIntoSite(values) {
      auth.signInWithEmailAndPassword(values.email, values.pass).catch(err => {
        if (err.code === "auth/user-not-found") { signInError.text("Account not found. Have you signed up yet?") }
        else if (err.code === "auth/wrong-password") { signInError.text("Invalid password, please try again.") }
        else if (err.code === "auth/invalid-email") { signInError.text("Invalid email format! Proper format example: username@gmail.com") }
        else if (err.code === "auth/operation-not-allowed") return console.log("DEV TEAM: Enable Email/Pass Auth in Firebase Settings");

      })
    }
    
    function getAccountData() {
      var inputs = $('#myForm :input');
      inputs.each(function () {
        values[this.name] = $(this).val();
      });

      if (!values.email) signInError.text("Make sure to fill in your email!")
      else if (!values.password) signInError.text("Make sure to fill in your password!")
      else return values;
    }

    //The sign in/out button within the nav bar, changes function based on the text of the button.
    navSignInOut.on("click", function(event) {
      if (navSignInOut.prop("value") === "Sign In") signInModal.show("slow");
      else auth.signOut();
    })

    //The login button within the sign in modal
    loginBtn.on("click", function (event) {
      event.preventDefault();
      var values = getAccountData();
      if (values) signIntoSite(values)
    })
    
    //The sign up button within the sign in modal
    signUpBtn.on("click", function (event) {
      event.preventDefault();
      var values = getAccountData();
      if (values) createUser(values)
    })

    //Whenever the account changes state between signed in / out
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(`${user.name} just logged in.`);
        //On the next click the button will sign out
        navSignInOut.prop("value", "Sign Out");
      }
      else {
        console.log(`User needs to sign in.`); 
        //On the next click the button will sign in
        navSignInOut.prop("value", "Sign In");
      }
    })//End of changeState listener

  })//end of key 
})//End of html load