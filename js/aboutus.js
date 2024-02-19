const myVideo = document.querySelector(".history_video");
function playPause() {
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}
