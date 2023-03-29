import React from "react";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryId = location.state;
  return (
    <nav>
      <h1 onClick={() => navigate("/", { state: categoryId })}>Mini YouTube</h1>
    </nav>
  );
};

export default Navbar;
