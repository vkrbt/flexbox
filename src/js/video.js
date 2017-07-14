window.onload = function() {

  // Video
  var video = document.getElementById("video");
  var videoContainer = document.getElementById("video-container");

  //console.log(video, videoContainer)

  // Buttons
  var playButton = videoContainer.querySelector(".play-pause");
  var muteButton = videoContainer.querySelector(".mute");
  var fullScreenButton = videoContainer.querySelector(".full-screen");

  // Sliders
  var seekBar = videoContainer.querySelector(".seek-bar");
  var volumeBar = videoContainer.querySelector(".volume-bar");

  playButton.addEventListener("click", function() {
    if (video.paused == true) {
      // Play the video
      video.play();

      // Update the button text to 'Pause'
      playButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    } else {
      // Pause the video
      video.pause();

      // Update the button text to 'Play'
      playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
  });
  muteButton.addEventListener("click", function() {
    if (video.muted == false) {
      // Mute the video
      video.muted = true;

      // Update the button text
      muteButton.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    } else {
      // Unmute the video
      video.muted = false;

      // Update the button text
      muteButton.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    }
  });
  fullScreenButton.addEventListener("click", function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  });
  seekBar.addEventListener("change", function() {
    // Calculate the new time
    var time = video.duration * (seekBar.value / 100);

    // Update the video time
    video.currentTime = time;
  });
  video.addEventListener("timeupdate", function() {
    // Calculate the slider value
    var value = (100 / video.duration) * video.currentTime;

    // Update the slider value
    seekBar.value = value;
  });
  seekBar.addEventListener("mousedown", function() {
    video.pause();
  });

  // Play the video when the slider handle is dropped
  seekBar.addEventListener("mouseup", function() {
    video.play();
  });
  volumeBar.addEventListener("change", function() {
    // Update the video volume
    video.volume = volumeBar.value;
  });
}
