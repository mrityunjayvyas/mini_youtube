import React from "react";
import "./Videos.css";
import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Videos = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryId = location.state;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:5000/video?categoryId=${categoryId}`;
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setVideos(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [categoryId]);

  const fetchData = async () => {
    const url = `http://localhost:5000/video?categoryId=${categoryId}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setVideos(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  const refresh = () => {
    fetchData();
  };
  return (
    <div className="container1  ">
      <button
        onClick={() => navigate("/AddVideos", { state: categoryId })}
        className="overflow"
      >
        {" "}
        ADD VIDEO
      </button>

      <div className="row">
        {videos.map((video) => {
          return (
            <div className="col-md-4">
              {" "}
              <VideoCard onDelete={() => refresh()} video={video} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
