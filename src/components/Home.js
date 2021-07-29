import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      THIS IS THE HOME PAGE
      <Link to="/tv">Go to Tv PAGE</Link>
    </div>
  );
};

export default Home;
