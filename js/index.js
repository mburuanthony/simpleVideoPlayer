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
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/video_player%2Fsimple-song.jpg?alt=media&token=b4f5d18b-9b8f-4f94-8b49-f0f01b505052",
    videoURL:
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/video_player%2Fsimple_song.mkv?alt=media&token=b5915cf6-fb03-4544-a08d-1af2499adf72",
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
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/video_player%2Fbetter.jpg?alt=media&token=dacdff8b-b6a1-41a4-8ce3-9d63d333c47f",
    videoURL:
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/video_player%2Fbetter.mkv?alt=media&token=30dc752a-4f3d-4aed-bbed-b57162832f23",
  },
  {
    title: "I ain't worried",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/video_player%2FI_aint_worried.jpg?alt=media&token=a184b187-56fe-4ec4-bb07-839e2776a6e8",
    videoURL:
      "https://firebasestorage.googleapis.com/v0/b/img-uploader-b6b4b.appspot.com/o/video_player%2FI_aint_worried.mkv?alt=media&token=92f58bd5-bc3f-4cf9-9703-d9ab262329f8",
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
const keymap = document.querySelector("#key-map");

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

document.addEventListener("keypress", (e) => {
  if (e.key === "l") loopVideo();

  if (e.key === "m") muteVideo();

  if (e.key === "n") playNext();

  if (e.key === "o") loopFalse();

  if (e.key === "p") playPrevious();

  if (e.key === "r") location.reload();

  if (e.key === "u") unmuteVideo();

  if (e.key === ".") video.pause();

  if (e.key === ",") video.play();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") forward30();

  if (e.key === "ArrowLeft") replay30();

  if (e.shiftKey) {
    keymap.showModal();
  }
});

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
