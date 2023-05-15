// import "./SideVideoNav.scss";
import { NavLink } from "react-router-dom";
import React from "react";
import ReactPlayer from "react-player";

const handleClickScroll = () => {
  const element = document.getElementById("react-play");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function SideVideoNav({ video }) {
  return (
    <div className="sidevideodiv" onClick={handleClickScroll}>
      <NavLink className="sidevideodiv__imagediv" to={`/video/${video.id}`}>
        <ReactPlayer url={video.video} volume={0} width="100%" height="100%" />

        <div className="sidevideodiv__text">
          <h4 className="sidevideodiv__text--title">{video.title}</h4>
          <span className="sidevideodiv__text--name">{video.channel}</span>
        </div>
      </NavLink>
    </div>
  );
}

export default SideVideoNav;
