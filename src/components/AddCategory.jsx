import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddCategory.css";

const AddCategory = () => {
  const navigate = useNavigate();
  const addCategory = (event) => {
    if (data.name === undefined) {
      alert("Please enter valid name ");
      return;
    }
    if (data.image === undefined) {
      alert("Please enter valid imageURL");
      return;
    } else {
      event.preventDefault();
      console.warn({ data });
      fetch("http://localhost:4000/category", {
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
  var data = {};

  const onChangeName = (event) => {
    data.name = event.target.value;
  };
  const onchangeImage = (event) => {
    data.image = event.target.value;
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <input
            defaultValue={data.name}
            onChange={onChangeName}
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Category Name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={onchangeImage}
            type="text"
            className="form-control"
            placeholder="Category Image URL"
            name="image"
            id="image"
          />
        </div>

        <button onClick={addCategory} type="submit" className="Submit">
          ADD CATEGORY
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
