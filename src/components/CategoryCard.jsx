import React from "react";
import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";

const CategoryCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/Videos", { state: props.category.id })}
      className="categoryCard"
      style={{
        backgroundImage: `url(${props.category.image})`,
      }}
    >
      <div className="categoryName"></div>
      <div className="category">{props.category.name}</div>
    </div>
  );
};

export default CategoryCard;
