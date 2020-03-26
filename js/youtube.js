
  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
      "part": "snippet",
      "maxResults": 25,
      "q": "corona"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  });
  authenticate().then(loadClient)
  execute()

  <div class="col-md-4 video-box no-gutters">
                                <img src="assets/img/thumb.jpg" class="img-fluid" alt="">
                                <a href="https://www.youtube.com/watch?v=wKX1PQTz5_M" class="venobox play-btn mb-4"
                                    data-vbtype="video" data-autoplay="true"></a>
                                <p>Surgeon General Social Distancing</p>
                            </div>
  
