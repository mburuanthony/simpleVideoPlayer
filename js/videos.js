import { videoList, other_videos } from "./index.js";
import { dragVideo, playOtherVideo } from "./controls.js";

videoList.map((video, index) => {
  const video_poster = document.createElement("div");
  const video_title = document.createElement("div");
  const title_txt = document.createElement("p");

  video_poster.setAttribute("id", "video_poster");
  video_poster.setAttribute("class", `video ${index}`);
  video_poster.setAttribute("draggable", true);
  video_title.setAttribute("class", "content");

  video_poster.style.cssText = `background-image:url(${video.imageURL})`;

  video_poster.addEventListener("dragstart", (e) =>
    dragVideo(e, video.videoURL, video.imageURL)
  );
  video_poster.addEventListener("click", () =>
    playOtherVideo(video.videoURL, video.imageURL)
  );

  title_txt.textContent = video.title;

  video_title.appendChild(title_txt);
  video_poster.appendChild(video_title);

  other_videos.appendChild(video_poster);
});
