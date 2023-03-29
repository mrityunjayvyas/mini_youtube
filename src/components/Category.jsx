import React, { useEffect, useState } from "react";
import "./Category.css";
import CategoryCard from "./CategoryCard";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:4000/category";
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setCategories(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="container1  ">
      <button onClick={() => navigate("/InputSection")} className="overflow">
        {" "}
        ADD CATEGORY
      </button>

      <div className="row">
        {categories.map((category) => {
          return (
            <div className="col-md-4">
              {" "}
              <CategoryCard category={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
