import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { useDetectOutsideClick } from "./Util/useDetectOutsideClick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const [toggle, setToggle] = useDetectOutsideClick(dropdownRef, false);
  // const [toggle, setToggle] = useState(false);

  const showMenu = () => {
    setToggle(!toggle);
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const [togglePortfolio, setTogglePortfolios] = useState(true);

  const showPortfolio = () => {
    setTogglePortfolios(!togglePortfolio);
    setToggle(true);
  };
  return (
    <>
      {/* <div className="navbar blur "> */}
      <div className={`navbar ${toggle ? "blur" : "blackBlur"}`}>
        {/* <div className="navbar blackBlur"> */}
        {/* MENU */}

        {/* LOGO */}
        <Link to="/">
          <div
            onClick={() => {
              setToggle(false);
              document.body.style.overflow = "scroll";
            }}
            className="logoContainer"
          >
            <div className="logoIcon">
              <FontAwesomeIcon icon={faMicrophone} />
            </div>
            <div className="logoText">
              <span>Maya Russell-Smith</span>
              <span className="smallText">Broadcast Journalist</span>
            </div>
          </div>
        </Link>

        <div className="navbarLinks">
          <Link to="/radio">
            <Button className="navbarLink" variant="text">
              Radio
            </Button>
            {/* <div className="navbarLink">Radio</div> */}
          </Link>
          <Link to="/tv">
            <Button className="navbarLink" variant="text">
              TV
            </Button>
          </Link>
          <Link to="/articles">
            <Button className="navbarLink" variant="text">
              Digital
            </Button>
          </Link>

          <Link to="/blog">
            <Button className="whiteColor marginLeft" variant="outlined">
              BLOG
            </Button>
            {/* <div className="button2 whiteColor marginLeft">Blog</div> */}
          </Link>
        </div>

        <div className="menu" onClick={showMenu}>
          <div className={`line line1 ${toggle ? "open" : "close"}`}></div>
          <div className={`line line2 ${toggle ? "open" : "close"}`}></div>
        </div>
      </div>
      <div className={`blur menuContainer ${toggle ? "open" : "close"}`}>
        <div className="menuSlide">
          <div className="links noselect">
            <Link onClick={showMenu} to={"/"}>
              <p>About Me</p>
            </Link>
            <Link onClick={showMenu} to={"/blog"}>
              <p>Blog</p>
            </Link>

            <div className="menuPortfolios" onClick={showPortfolio}>
              <p className="noselect">PORTFOLIO</p>
              <div
                className={`arrowMenu noselect ${
                  togglePortfolio ? "open" : "close"
                }`}
              >
                <p>&gt;</p>
              </div>
            </div>
            <ul className={`noselect ${togglePortfolio ? "open" : "close"}`}>
              <li>
                <Link onClick={showMenu} to={"/Radio"}>
                  <p>Radio</p>
                </Link>
              </li>
              <li>
                <Link onClick={showMenu} to={"/Articles"}>
                  <p>Digital</p>
                </Link>
              </li>
              <li>
                <Link onClick={showMenu} to={"/tv"}>
                  <p>Tv</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
