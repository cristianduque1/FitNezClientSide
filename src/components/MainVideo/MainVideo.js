// import "./MainVideo.scss";

// import { Form } from "react-router-dom";
import Form from "../Form/Form";
import React from "react";
import ReactPlayer from "react-player";

function MainVideo({ selectedVideoId }) {
  const { video } = selectedVideoId;

  return (
    <main className="main">
      {/* <video src={video} className="main__video" controls poster={image}>
        <source />
      </video> */}

      <ReactPlayer
        url={video}
        className="react-player"
        id="react-play"
        playing
        controls
        width="100vw"
        height="100vh"
        // width="100%"
        // height="100%"
      />
      {/* <iframe
        src={video}
        title="YouTube video player"
        className="main__video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
      <Form />
    </main>
  );
}

export default MainVideo;
