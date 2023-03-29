import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddVideos = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryId = location.state;
  const onClickAddVideo = (event) => {
    if (data.name === undefined) {
      alert("Please enter valid name");
      return;
    }
    if (data.image === undefined) {
      alert("Please enter valid imageURL");
      return;
    }
    if (data.video === undefined) {
      alert("Please enter valid videoURL");
    } else {
      event.preventDefault();
      fetch("http://localhost:5000/video", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        // console.warn("result");
        result.json().then((resp) => {
          console.warn("resp", resp);
          navigate(-1);
        });
      });
    }
  };

  var data = { categoryId: categoryId };

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
          />
        </div>

        <button onClick={onClickAddVideo} type="submit" className="Submit">
          ADD VIDEO
        </button>
      </form>
    </div>
  );
};

export default AddVideos;
