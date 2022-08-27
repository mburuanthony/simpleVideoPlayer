import {
  onVideoLoaded,
  onVideoWaiting,
  playVideo,
  updatecurrentTime,
  loopVideo,
  loopFalse,
  muteVideo,
  unmuteVideo,
  replay30,
  forward30,
  allowDropVideo,
  dropVideo,
  playNext,
  playPrevious,
  setPlaybackRate,
} from "./controls.js";

export const videoList = [
  {
    title: "Passenger - Simple song",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/simple-song.jpg?alt=media&token=f00dbbc1-74d0-49de-85b3-82b0bc14e4c2",
    videoURL:
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/simple_song.mkv?alt=media&token=67b404e1-2db2-48cb-b080-90f20530f299",
  },
  {
    title: "Imagine Dragons - Bones",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/video_player%2Fbones.jpg?alt=media&token=a3276974-3b5c-495b-ba76-8aa8f131b6ee",
    videoURL:
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/video_player%2FImagine_dragons_bones.mkv?alt=media&token=f0b13ff7-1287-463b-946d-0920bbdb6c7f",
  },
  {
    title: "Khalid - Better",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/better.jpg?alt=media&token=f6cc9025-b937-420d-a000-689eadea9d21",
    videoURL:
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/better.mp4?alt=media&token=f743f18e-ea1a-444a-a97b-4b6c8c03f536",
  },
  {
    title: "Ed Sheeran - Shivers",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/shivers.jpg?alt=media&token=08e995db-8937-4038-8d9c-ed232bf6f7f2",
    videoURL:
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/shivers.mp4?alt=media&token=8108705a-6258-416b-8cc8-7149e33b43c4",
  },
];

export const video = document.querySelector("#video_player");
export const play_pause = document.querySelector("#play_pause");
export const curr_time = document.querySelector("#curr_time");
export const total_time = document.querySelector("#total_time");
export const video_progress = document.querySelector("#video_progress");
export const playBtn = document.querySelector(".play");
export const pauseBtn = document.querySelector(".pause");
export const loop_video = document.querySelector(".loop_video");
export const loop_false = document.querySelector(".loop_false");
export const mute = document.querySelector(".mute");
export const unmute = document.querySelector(".unmute");
export const replay_30 = document.querySelector("#replay30");
export const forward_30 = document.querySelector("#forward30");
export const shuffle = document.querySelector("#shuffle");
export const shuffle_on = document.querySelector("#shuffle_on");
export const skip_previous = document.querySelector("#skip_previous");
export const skip_next = document.querySelector("#skip_next");
export const spinner = document.querySelector("#spinner_container");
export const seek = document.querySelector("#seek");
export const other_videos = document.querySelector("#other_videos");
export const pr05 = document.querySelector("#pr05");
export const pr1 = document.querySelector("#pr1");
export const pr2 = document.querySelector("#pr2");
export const year = document.querySelector("#year");
export const playerPoster = document.querySelector(".player_poster");

play_pause.addEventListener("click", playVideo);

playerPoster.setAttribute("src", videoList[0]?.imageURL);
video.setAttribute("poster", videoList[0].imageURL);
video.src = videoList[0].videoURL;
video.addEventListener("timeupdate", updatecurrentTime);
video.addEventListener("waiting", onVideoWaiting);
video.addEventListener("loadeddata", onVideoLoaded);
video.addEventListener("playing", onVideoLoaded);
video.addEventListener("dragover", (e) => allowDropVideo(e));
video.addEventListener("drop", (e) => dropVideo(e));
video.addEventListener("dragend", (e) => dropVideo(e));

loop_video.addEventListener("click", loopVideo);
loop_false.addEventListener("click", loopFalse);

mute.addEventListener("click", muteVideo);
unmute.addEventListener("click", unmuteVideo);

replay_30.addEventListener("click", replay30);
forward_30.addEventListener("click", forward30);

skip_previous.addEventListener("click", () => playPrevious());
skip_next.addEventListener("click", () => playNext());

pr05.addEventListener("click", () => setPlaybackRate(0.5));
pr1.addEventListener("click", () => setPlaybackRate(1));
pr2.addEventListener("click", () => setPlaybackRate(2));

const yeartoday = new Date().getUTCFullYear();
year.textContent = yeartoday;

(() => {
  video.loop = false;
  video.muted = false;

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
})();
