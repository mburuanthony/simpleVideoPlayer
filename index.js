let video = document.querySelector("#video_player");
const play_pause = document.querySelector("#play_pause");
const curr_time = document.querySelector("#curr_time");
const total_time = document.querySelector("#total_time");
const video_progress = document.querySelector("#video_progress");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const loop_video = document.querySelector(".loop_video");
const loop_false = document.querySelector(".loop_false");
const mute = document.querySelector(".mute");
const unmute = document.querySelector(".unmute");
const spinner = document.querySelector("#spinner_container");
const year = document.querySelector("#year");

const playVideo = () => {
  video.paused ? video.play() : video.pause();

  const total_duration = Math.round(video.duration / 59);
  const total_duratiom_rem = Math.round(video.duration % 59);
  total_time.textContent = `${total_duration}:${total_duratiom_rem}`;

  if (video.paused) {
    playBtn.style.cssText = "display:block";
    pauseBtn.style.cssText = "display:none";
  } else {
    playBtn.style.cssText = "display:none";
    pauseBtn.style.cssText = "display:block";
  }

  if (video.muted) {
    unmute.style.cssText = "display:block !important";
    mute.style.cssText = "display:none !important";
  } else {
    mute.style.cssText = "display:block !important";
    unmute.style.cssText = "display:none !important";
  }
};

play_pause.addEventListener("click", playVideo);

const updatecurrentTime = () => {
  const current_play_time = Math.round(video.currentTime / 59);
  const current_play_time_rem = Math.round(video.currentTime % 59);
  curr_time.textContent = `${current_play_time}:${
    current_play_time_rem <= 9
      ? "0" + current_play_time_rem
      : current_play_time_rem
  }`;

  const progress_bar_value = (video.currentTime / video.duration) * 100;
  video_progress.style.cssText = `width:${progress_bar_value}%`;

  const total_duration = Math.round(video.duration / 59);
  const total_duratiom_rem = Math.round(video.duration % 59);
  total_time.textContent = `${total_duration}:${
    total_duratiom_rem <= 9 ? "0" + total_duratiom_rem : total_duratiom_rem
  }`;

  if (video.loop) {
    loop_false.style.cssText = "display:block";
    loop_video.style.cssText = "display:none";
  } else {
    loop_video.style.cssText = "display:block";
    loop_false.style.cssText = "display:none";
  }

  if (video.muted) {
    unmute.style.cssText = "display:block !important";
    mute.style.cssText = "display:none !important";
  } else {
    mute.style.cssText = "display:block !important";
    unmute.style.cssText = "display:none !important";
  }
};

const onVideoWaiting = () => {
  spinner.style.cssText = "display:block !important";
};

const onVideoLoaded = () => {
  spinner.style.cssText = "display:none !important";
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

const loopVideo = () => (video.loop = true);
const loopFalse = () => (video.loop = false);
const muteVideo = () => (video.muted = true);
const unmuteVideo = () => (video.muted = false);

const yeartoday = new Date().getUTCFullYear();
year.textContent = yeartoday;

(() => {
  video.loop = false;
  video.muted = false;

  if (video.loop) {
    loop_false.style.cssText = "display:block";
    loop_video.style.cssText = "display:none";
  } else {
    loop_video.style.cssText = "display:block";
    loop_false.style.cssText = "display:none";
  }

  if (video.muted) {
    unmute.style.cssText = "display:block !important";
    mute.style.cssText = "display:none !important";
  } else {
    mute.style.cssText = "display:block !important";
    unmute.style.cssText = "display:none !important";
  }
})();
