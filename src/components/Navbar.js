import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const showMenu = () => {
    setToggle(!toggle);
  };

  const [togglePortfolio, setTogglePortfolios] = useState(false);

  const showPortfolio = () => {
    setTogglePortfolios(!togglePortfolio);
    setToggle(true);
  };
  return (
    <>
      <div className="navbar">
        {/* MENU */}

        <div className="menu" onClick={showMenu}>
          <div className={`line line1 ${toggle ? "open" : "close"}`}></div>
          <div className={`line line2 ${toggle ? "open" : "close"}`}></div>
        </div>

        {/* LOGO */}
        <Link to="/">
          <div className="logo">MAYA</div>
        </Link>

        {/* SHARE */}
        <div className="share">Share</div>
      </div>
      <div className={`menuContainer ${toggle ? "open" : "close"}`}>
        <div className="menuSlide">
          <div className="links">
            <Link onClick={showMenu} to={"/"}>
              <p>Home</p>
            </Link>
            <div className="menuPortfolios" onClick={showPortfolio}>
              <p>
                PORTFOLIOS
                <span
                  className={`arrowMenu ${togglePortfolio ? "open" : "close"}`}
                >
                  &gt;
                </span>
              </p>
            </div>
            <ul className={`${togglePortfolio ? "open" : "close"}`}>
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
      </div>
    </>
  );
};

export default Navbar;
