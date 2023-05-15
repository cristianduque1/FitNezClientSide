import React from "react";
import ReactPlayer from "react-player";
import Form from "../FeedBack/FeedBack";
import FeedBack from "../FeedBack/FeedBack";
function MainVideo({ selectedVideoId }) {
  const { video } = selectedVideoId;

  return (
    <main className="main">
      <ReactPlayer
        url={video}
        className="react-player"
        id="react-play"
        controls
        width="100vw"
        height="100vh"
      />
      <FeedBack />
    </main>
  );
}

export default MainVideo;
