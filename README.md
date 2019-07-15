# Savant (Project 02)

[Visit Savant deployed page]()
___

### Design

Our front-end design was meant to spark user interest and interactivity. The design highlights binary user choice, limiting user options, and providing a smaller scope allowing for quicker, more conscise decisions. Our intent for this design choice was to prevent the user from being indundated from too many choices and to aid those in our generation who suffer from "analysis-paralysis".


### Logic

The basic logic flow of this web-based application begins with the user-input. The user inputs their parameters for their search, thus dynamically generating their final search query. That search query, once its parameters are completed, is used to perform an Ajax call to the Yelp API to return a JSON object with data to leveraged for rendering on the page. But before all of our information is rendered onto the page, we take location data from the Ajax call and send a requeste to the Google Maps API to dynamically generate a Javascript map w/ markers according to the location of the businesses received from the Yelp API.




## Built With

___

* [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [Node.js](https://nodejs.org/en/docs/)
* [Express](https://www.npmjs.com/package/express)
* [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [Google Fonts](https://developers.google.com/fonts/)
* [Animate.css](https://github.com/daneden/animate.css)
* [JQuery](https://api.jquery.com/)
* [MySQL](https://dev.mysql.com/doc/)
* [Sequelize](http://docs.sequelizejs.com/manual/getting-started.html)
* [AJAX](https://api.jquery.com/category/ajax/)
* [Firebase](https://firebase.google.com/docs)
* [Moment.JS](https://momentjs.com/docs/)
* [YouTube API](https://developers.google.com/youtube/v3/)
* [Google Calendar API](https://developers.google.com/calendar/)
* [AWS S3 Buckets](https://aws.amazon.com/s3/)
* [Path](https://www.npmjs.com/package/path)


![Commits]()
![Graph]()
___

![Drink Selection Page](/assets/Images/screenshots/index-page-screenshot1.png)
![Priority Selection Page](/assets/Images/screenshots/priority-selection-screenshot.png)
![Results Page](/assets/Images/screenshots/results-screenshot.png)
![Google Maps Page](/assets/Images/screenshots/maps-screenshot.png)

___

## Authors

* Esar Behlum - [UC Berkeley Extension](https://github.com/esarnb)
* Phillip Chang - [UC Berkeley Extension](https://github.com/PhillipChang)
* Derek Goldstone - [UC Berkeley Extension](https://www.linkedin.com/in/derek-goldstone-482884a3/)
* Matthew Hagarty - [UC Berkeley Extension](https://github.com/matthewryanhagarty)



___