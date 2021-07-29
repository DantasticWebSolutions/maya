import React from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menuSlide">
      <div className="links">
        <Link to={"/about"}>
          <p>About</p>
        </Link>
        <p>Recipes</p>
        <ul className="recipesLinks">
          <li>
            <Link to={"/"}>
              <p>All</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p>Pescatorian</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p>Vegetarian</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p>Vegan</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="icons">
        <SocialIcon
          url="https://www.facebook.com/"
          fgColor="#fff"
          className="socialIcon"
        />
        <SocialIcon
          url="https://www.linkedin.com/"
          fgColor="#fff"
          className="socialIcon"
        />
        <SocialIcon
          url="https://www.instagram.com/eatingwithelisa/"
          fgColor="#fff"
          className="socialIcon"
        />
      </div>
    </div>
  );
};

export default Menu;
