const video = document.querySelector("#video_player");
const play_pause = document.querySelector("#play_pause");
const curr_time = document.querySelector("#curr_time");
const total_time = document.querySelector("#total_time");
const video_progress = document.querySelector("#video_progress");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const year = document.querySelector("#year");

const playVideo = () => {
  video.paused ? video.play() : video.pause();

  if (video.paused) {
    playBtn.style.cssText = "display:block";
    pauseBtn.style.cssText = "display:none";
  } else {
    playBtn.style.cssText = "display:none";
    pauseBtn.style.cssText = "display:block";
  }

  const total_duration = Math.round(video.duration / 60);
  const total_duratiom_rem = Math.round(video.duration % 60);
  total_time.textContent = `${total_duration}:${total_duratiom_rem}`;
};

play_pause.addEventListener("click", playVideo);

const updatecurrentTime = () => {
  const current_play_time = Math.round(video.currentTime / 60);
  const current_play_time_rem = Math.round(video.currentTime % 60);
  curr_time.textContent = `${current_play_time}:${current_play_time_rem}`;

  const progress_bar_value = (video.currentTime / video.duration) * 100;
  video_progress.style.cssText = `width:${progress_bar_value}%`;

  const total_duration = Math.round(video.duration / 60);
  const total_duratiom_rem = Math.round(video.duration % 60);
  total_time.textContent = `${total_duration}:${total_duratiom_rem}`;
};

const setPlaybackRate = (playbackrate) => {
  video.playbackRate = playbackrate;
};

const playOtherVideo = (videoURL) => {
  video.src = videoURL;
  playVideo();
};

const allowDropVideo = (e) => {
  e.preventDefault();
};

const dragVideo = (e, videoURL) => {
  e.dataTransfer.setData("video_url", videoURL);
};

const dropVideo = (e) => {
  let videoURL = e.dataTransfer.getData("video_url");
  playOtherVideo(videoURL);
};

const yeartoday = new Date().getUTCFullYear();
year.textContent = yeartoday;
