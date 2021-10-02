import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import SocialIcons from "./SocialIcons";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

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
      <div className="navbar blur">
        {/* MENU */}

        {/* LOGO */}
        <Link to="/">
          <div onClick={() => setToggle(false)} className="logo">
            Maya Russell-Smith
          </div>
        </Link>

        <div className="menu" onClick={showMenu}>
          <div className={`line line1 ${toggle ? "open" : "close"}`}></div>
          <div className={`line line2 ${toggle ? "open" : "close"}`}></div>
        </div>
      </div>
      <div className={`menuContainer ${toggle ? "open" : "close"}`}>
        <div className="menuSlide">
          <div className="links noselect">
            <Link onClick={showMenu} to={"/"}>
              <p>Home</p>
            </Link>
            <div className="menuPortfolios" onClick={showPortfolio}>
              <p className="noselect">PORTFOLIOS</p>
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
                <Link onClick={showMenu} to={"/tv"}>
                  <p>Tv</p>
                </Link>
              </li>
              <li>
                <Link onClick={showMenu} to={"/Radio"}>
                  <p>Radio</p>
                </Link>
              </li>
              <li>
                <Link onClick={showMenu} to={"/Articles"}>
                  <p>Articles</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* <Contact /> */}
          <div className="infoContainer">
            <a href="mailto:mayarussellsmith@gmail.com">
              <p>
                <SocialIcon
                  url="mailto:mayarussellsmith@gmail.com"
                  fgColor="#fff"
                  className="socialIcon"
                />
                mayarussellsmith@gmail.com
              </p>
            </a>
            <a href="tel:+447502381831">
              <p>
                <SocialIcon
                  url="tel:+447502381831"
                  fgColor="#fff"
                  className="socialIcon"
                />
                +44 07502381831
              </p>
            </a>
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
