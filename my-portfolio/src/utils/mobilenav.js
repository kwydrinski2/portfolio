import React, { useState, useEffect, useRef } from "react";
import linkedinlogo from '../utils/linkedinlogo.webp';
import githublogo from '../utils/githublogo.webp';
import "../App.css";

const STORE_NAME = "KW";
const SHOW_AFTER = 20; // px

const Navbar = () => {
  const navRef = useRef(null);
  const [show, setShow] = useState(false); 

  useEffect(() => {
    const setHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${navRef.current.offsetHeight}px`
        );
      }
    };
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrolled =
        document.body.scrollTop > SHOW_AFTER ||
        document.documentElement.scrollTop > SHOW_AFTER;
      setShow(scrolled);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="Navbar"
      ref={navRef}
      className={`navbar ${show ? "navbar--visible" : "navbar--hidden"}`}
    >
      <div className="nav-left">
        <span className="store-name">{STORE_NAME}</span>
      </div>

      <a href='https://www.linkedin.com/in/kyle-wydrinski-33b430298'>
        <img src={linkedinlogo} alt="linkedin" />
      </a>
      <a href='https://github.com/kwydrinski2/'>
        <img src={githublogo} alt="linkedin" />
      </a>
    </nav>
  );
};

export default Navbar;