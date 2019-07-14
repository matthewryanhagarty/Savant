$(function(){
gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "602269593939-5eqq385l144j8mu68idmeq0m7kr50kqc.apps.googleusercontent.com"});
  });
  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("AIzaSyAlfUz6G_ZRX-bupXv1wo6XpABl2D7uhmU");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  function execute() {
    return gapi.client.youtube.liveBroadcasts.insert({
      "part": "snippet,contentDetails,status",
      "resource": {
        "snippet": {
          "title": "Test broadcast",
          "scheduledStartTime": "2019-07-14T23:00:00Z",
          "scheduledEndTime": "2019-07-14T23:54:00Z"
        },
        "contentDetails": {
          "enableClosedCaptions": true,
          "enableContentEncryption": true,
          "enableDvr": true,
          "enableEmbed": true,
          "recordFromStart": true,
          "startWithSlate": true
        },
        "status": {
          "privacyStatus": "unlisted"
        }
      }
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                console.log("Embed Iframe", response.result.contentDetails.monitorStream.embedHtml);
                console.log("Video ID", response.result.contentDetails.id);
                var id = response.result.contentDetails.id;
                //This is the url to attach video id to in order to redirct to youtube: https://www.youtube.com/watch?v= + id
                console.log("End time",response.result.snippet.scheduledEndTime);
                console.log("start Time", response.result.snippet.scheduledStartTime);
                console.log("Title", response.result.snippet.title);
                console.log("Channel ID", response.result.snippet.channelID);

              },
              function(err) { console.error("Execute error", err); });
  }
})
  
