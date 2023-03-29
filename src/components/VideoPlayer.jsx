import React from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const location = useLocation();
  var videoURL = location.state;

  return (
    <div className="iframe">
      {" "}
      <ReactPlayer url={videoURL} />
    </div>
  );
};

export default VideoPlayer;
