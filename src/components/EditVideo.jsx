import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditVideo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const video = location.state;
  const onClickAddVideo = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/video/${video.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        navigate(-1);
      });
    });
  };

  var data = video;

  const onChangeName = (event) => {
    data.name = event.target.value;
  };
  const onchangeImage = (event) => {
    data.image = event.target.value;
  };
  const onchangeVideoURL = (event) => {
    data.video = event.target.value;
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <input
            onChange={onChangeName}
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Video Title"
            aria-describedby="emailHelp"
            defaultValue={video.name}
          />
        </div>
        <div className="mb-3">
          <input
            onChange={onchangeImage}
            type="text"
            className="form-control"
            placeholder="Thumbnail URL"
            name="image"
            id="image"
            defaultValue={video.image}
          />
        </div>
        <div className="mb-3">
          <input
            onChange={onchangeVideoURL}
            type="text"
            className="form-control"
            placeholder="Video URL"
            name="video"
            id="video"
            defaultValue={video.video}
          />
        </div>

        <button onClick={onClickAddVideo} type="submit" className="Submit">
          ADD VIDEO
        </button>
      </form>
    </div>
  );
};

export default EditVideo;
