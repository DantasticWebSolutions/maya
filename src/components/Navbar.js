import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
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
      <div className="navbar">
        {/* MENU */}

        {/* LOGO */}
        <Link to="/">
          <div onClick={() => setToggle(false)} className="logo">
            Maya Russell-Smith: Broadcast Journalist
          </div>
        </Link>

        <div className="menu" onClick={showMenu}>
          <div className={`line line1 ${toggle ? "open" : "close"}`}></div>
          <div className={`line line2 ${toggle ? "open" : "close"}`}></div>
        </div>
      </div>
      <div className={`menuContainer ${toggle ? "open" : "close"}`}>
        <div className="menuSlide">
          <div className="links">
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

          <Contact />
        </div>
      </div>
    </>
  );
};

export default Navbar;
