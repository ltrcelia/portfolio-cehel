import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import stars from "../assets/img/stars.png";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  const handleAccueilClick = (event) => {
    event.preventDefault();
    scrollToPosition(0);
    navigate("/");
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < lastScroll) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <div id="navigation" style={{ top: navbarVisible ? "0" : "-90px" }}>
      <div className="primary-navigation">
        {" "}
        <div className="navigation">
          <Link to="/">
            <img src={logo} alt="Logo" onClick={handleAccueilClick} />
          </Link>
          <ul className="liens-nav">
            <Link to="/" onClick={handleAccueilClick}>
              <li>accueil.</li>
            </Link>
            <Link to="/#realisations-link">
              <li>réalisations.</li>
            </Link>
            <Link to="/#a-propos-link">
              <li>à propos.</li>
            </Link>
            <a href="mailto:celia.letellier@gmail.com">
              <li className="contact-box">contact.</li>
            </a>
          </ul>
        </div>
        <div
          id="btn"
          className={menuOpen ? "btn-menu active" : "btn-menu"}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={menuOpen ? "menu-burger open" : "menu-burger"}>
        <div className="bloc-etoile-top">
          <img src={stars} alt="Images d'étoiles" />
        </div>
        <ul>
          <Link to="/">
            <li className="link-border" onClick={handleAccueilClick}>
              accueil.
            </li>
          </Link>
          <Link to="/#realisations-link" onClick={closeMenu}>
            <li className="link-border">réalisations.</li>
          </Link>
          <Link to="/#a-propos-link" onClick={closeMenu}>
            <li className="link-border">à propos.</li>
          </Link>
          <a href="mailto:celia.letellier@gmail.com">
            <li className="contact-box">contact.</li>
          </a>
        </ul>
        <div className="bloc-etoile-bottom">
          <img src={stars} alt="Images d'étoiles" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
