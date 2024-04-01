const fullscreenBtn = document.getElementById('fullscreen-btn');
const fullscreenContent = document.getElementById('fullscreen-content');
const audio = document.querySelector('audio');

fullscreenBtn.addEventListener('click', () => {
  if (fullscreenContent.requestFullscreen) {
    fullscreenContent.requestFullscreen();
  } else if (fullscreenContent.mozRequestFullScreen) {
    fullscreenContent.mozRequestFullScreen();
  } else if (fullscreenContent.webkitRequestFullscreen) {
    fullscreenContent.webkitRequestFullscreen();
  } else if (fullscreenContent.msRequestFullscreen) {
    fullscreenContent.msRequestFullscreen();
  }

  fullscreenContent.style.display = 'block';
  
  audio.play();
});
