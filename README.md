# (Group Project - 2): Savant

[Visit the deployed Savant page](https://savant-mh.herokuapp.com/)

## Prerequisites 

Things you will need:

* [NodeJS](https://nodejs.org/) on your local or remote machine.

* [NPM](https://www.npmjs.com/) packages to install dependencies (built into NodeJS)

* [MySQL](https://www.mysql.com/) to save data persistently.

  * If deploying to [Heroku](https://www.heroku.com/), install [JawsDB](https://elements.heroku.com/addons/jawsdb) as a resource and [CLI](https://devcenter.heroku.com/articles/creating-apps) to create an app

* [Firebase](https://console.firebase.google.com/) application, to connect to authentication servers for saving accounts.

* [AWS S3 Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html) for saving and hosting user profile pictures.
___

### Keys

* After creating a firebase application, you will see three options: IOS, Android, Web. You will need to choose Web, fill out the form (without adding a host/domain). Then firebase will create a keyfile configuration for you. Copy this keyfile and the html cdns. 

* After creating an AWS S3 Bucket, you will need to [create secret access keys](https://supsystic.com/documentation/id-secret-access-key-amazon-s3/). Save these alongside firebase's key.


The keys generated from both apps, will be sent to a .env file. Here is the format:

```
firebase_apiKey="an-alphanumeric-key"
firebase_authDomain="name.firebaseapp.com"
firebase_databaseURL="https://name.firebaseio.com"
firebase_projectId="app-name"
firebase_storageBucket=""
firebase_messagingSenderId="number"
firebase_appId="alphanumeric"

S3_BUCKET_NAME="app-name"
AWS_ACCESS_KEY_ID="alphanumeric"
AWS_SECRET_ACCESS_KEY="alphanumeric"
```

Make sure to keep case-sensitivity accurate and all in quotes. The application will use these to authenticate with the respective servers. 

If you will be running this on Heroku, these keys will be put into the "vars config" section within the Settings of the app created- however make sure not to add quotes when inputting the values.

___

### Deployment

Once the .env file is created, or Heroku has all of the keys ready, you may install all important dependencies by executing: `npm install` in the terminal. The command reads the package.json and installs all of the modules necessary. If you are deploying to Heroku, they will install them for you and run the server.

To run the server on your local machine, you may run the server.js script with the command: `node server.js`. The express package will serve the application on a default port 3000 & can visit the app on localhost:3000; as for Heroku, you may visit the site provided to you.


___

## Design

* User account creation
  * Savant users may begin with creating a user profile by entering their username, email, password, any form of contact url, and an avatar .jpg image file. 

  * The profile image will be saved to the AWS S3 Bucket server. Once uploaded, the user may continue to fulfill the account creation.

* Class creation

  * After the account has been created, the Savant user can opt to teach a class by providing a class title. Once the title is given, the user must log into their google account to continue. This is so that the user is verified to be able to create Youtube livestreams. Once the instructor is logged in, the rest of the fields will be unlocked.

  * The user instructor then provides a class description, class description via drop-down menu, and schedules a date/time in Google Calendar. Upon sumbit, the YouTube API generates an embed with the livestream url. Then the user can accept the class submission to our site.

* Page Stylings

  * The UI for Savant makes extensive use of Twitter Bootstrap CDN, animate.css, Google Fonts, and Font Awesome to create an engaging UX. 
  
  * Registered classes are displayed within dynamically generated cards within a Bootstrap carousel. 
  
  * Embedded within each class card is YouTube livestream iframe and course information from the YouTube API. 
  
  * The motto tagline and "Teach a Class"/"Learn A Skill" buttons are animated via class names in animate.css for aesthetic effect. 
  
  * Bootstrap's forms and modals provide streamlined structure to collect data values in order to make API calls and populate our sequelize models.

  <img src="public/assets/images/readme/7.png">
  <img src="public/assets/images/readme/2.png">
  <img src="public/assets/images/readme/3.png">
  <img src="public/assets/images/readme/4.png">
  <img src="public/assets/images/readme/5.png">
  <img src="public/assets/images/readme/6.png">

___
# Code Snippets
___

# Server
  <img src="public/assets/images/readme/server.png">

  # Controllers
  <img src="public/assets/images/readme/controllers.png">

  # Models
  <img src="public/assets/images/readme/models.png">

  # Models cont.
  <img src="public/assets/images/readme/models2.png">

  # Models cont.
  <img src="public/assets/images/readme/models3.png">

   # Dynamically Generating Cards & Displaying Results from the Database
  <img src="public/assets/images/readme/card-creation.png">

  # Google API
  <img src="public/assets/images/readme/google-api.png">

  # Google API cont.
  <img src="public/assets/images/readme/google-api2.png">

  # YouTube API
  <img src="public/assets/images/readme/youtube-api.png">

  # YouTube API cont.
  <img src="public/assets/images/readme/youtube-api1.png">

# Tech Used
___

Front End:

* [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [Google Fonts](https://developers.google.com/fonts/)
* [Animate.css](https://github.com/daneden/animate.css)
* [JQuery](https://api.jquery.com/)
* [Moment.JS](https://momentjs.com/docs/)
* [Font Awesome](https://fontawesome.com/)
* [Tempus Dominus DatePicker](https://tempusdominus.github.io/bootstrap-4/)

___

Back End

* [Node.js](https://nodejs.org/en/docs/)
* [Express](https://www.npmjs.com/package/express)
* [MySQL](https://dev.mysql.com/doc/)
* [Sequelize](http://docs.sequelizejs.com/manual/getting-started.html)
* [AJAX](https://api.jquery.com/category/ajax/)
* [Firebase](https://firebase.google.com/docs)
* [AWS S3 Buckets](https://aws.amazon.com/s3/)
* [YouTube API](https://developers.google.com/youtube/v3/)
* [Google Calendar API](https://developers.google.com/calendar/)

# Git Flow

<img src="public/assets/images/readme/8.png">

___

# Created By:

[Esar Behlum](https://github.com/esarnb)

[Phillip Chang](https://github.com/PhillipChang)

[Derek Goldstone](https://www.linkedin.com/in/derek-goldstone-482884a3/)

[Matthew Hagarty](https://github.com/matthewryanhagarty)



___