import React from "react";
import ReactPlayer from "react-player";
import Form from "../Form/Form";
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
      <Form />
    </main>
  );
}

export default MainVideo;
