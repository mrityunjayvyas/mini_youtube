/* eslint-disable no-redeclare */
import React from "react";
import "./VideoCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const VideoCard = (props) => {
  const navigate = useNavigate();

  const onClickDelete = () => {
    fetch(`http://localhost:5000/video/${props.video.id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        props.onDelete();
      });
    });
  };

  return (
    <>
      <div
        className="videoCard"
        style={{
          backgroundImage: `url(${props.video.image})`,
        }}
      >
        <div className="badge">
          <button
            onClick={() => onClickDelete(props.video.id)}
            className="DeleteIcon"
          >
            <DeleteIcon />
          </button>
          <button
            onClick={() => navigate("/EditVideo", { state: props.video })}
            className="EditIcon"
          >
            <EditIcon />
          </button>
        </div>
        <button
          onClick={() => navigate("/VideoPlayer", { state: props.video.video })}
          className="playButton"
        >
          <PlayCircleOutlineIcon />
        </button>

        <div className="VideoName"></div>
        <div className="videoTitle">{props.video.name}</div>
      </div>
    </>
  );
};

export default VideoCard;
