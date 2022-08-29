import {
  video,
  playBtn,
  pauseBtn,
  mute,
  unmute,
  loop_false,
  loop_video,
  spinner,
  videoList,
  playerPoster,
} from "./index.js";

export const playVideo = () => {
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

  seek.style.cssText = "display:block";
};

export const updatecurrentTime = () => {
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

  if (video.paused) {
    playBtn.style.cssText = "display:block";
    pauseBtn.style.cssText = "display:none";
  } else {
    playBtn.style.cssText = "display:none";
    pauseBtn.style.cssText = "display:block";
  }

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

export const onVideoWaiting = () => {
  spinner.style.cssText = "display:block !important";
};

export const onVideoLoaded = () => {
  spinner.style.cssText = "display:none !important";
};

export const setPlaybackRate = (playbackrate) => {
  video.playbackRate = playbackrate;
};

export const playOtherVideo = (videoURL, imageURL) => {
  playerPoster.setAttribute("src", imageURL);
  video.src = videoURL;
  playVideo();
};

export const allowDropVideo = (e) => {
  e.preventDefault();
};

export const dragVideo = (e, videoURL, imageURL) => {
  e.dataTransfer.setData("video_url", videoURL);
  e.dataTransfer.setData("image_url", imageURL);
};

export const dropVideo = (e) => {
  let videoURL = e.dataTransfer.getData("video_url");
  let imageURL = e.dataTransfer.getData("image_url");

  playOtherVideo(videoURL, imageURL);
};

export const loopVideo = () => (video.loop = true);
export const loopFalse = () => (video.loop = false);

export const muteVideo = () => (video.muted = true);
export const unmuteVideo = () => (video.muted = false);

export const replay30 = () => (video.currentTime = video.currentTime -= 30);
export const forward30 = () => (video.currentTime = video.currentTime += 30);

let currentIndex = 0;

export const playPrevious = () => {
  if (currentIndex < 0 || currentIndex >= videoList.length - 1)
    currentIndex = videoList.length - 1;

  playerPoster.setAttribute("src", videoList[currentIndex]?.imageURL);
  playOtherVideo(
    videoList[currentIndex]?.videoURL,
    videoList[currentIndex]?.imageURL
  );

  currentIndex -= 1;
};

export const playNext = () => {
  if (currentIndex >= videoList.length) currentIndex = 0;

  playerPoster.setAttribute("src", videoList[currentIndex]?.imageURL);
  playOtherVideo(
    videoList[currentIndex]?.videoURL,
    videoList[currentIndex]?.imageURL
  );

  currentIndex += 1;
};
