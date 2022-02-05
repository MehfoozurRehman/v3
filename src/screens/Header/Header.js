import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Header extends React.Component {
  toggle_nav() {
    const menuBtn = document.querySelector(".menu-btn");
    const mobileNav = document.querySelector(".nav");
    if (mobileNav.style.display === "none") {
      document.querySelector(".nav").style.display = "flex";
      menuBtn.classList.add("open");
    } else {
      document.querySelector(".nav").style.display = "none";
      menuBtn.classList.remove("open");
    }
  }
  toggle_theme() {
    var checkbox = document.querySelector("input[name=theme]");

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
      }
    });

    let trans = () => {
      document.documentElement.classList.add("transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 1000);
    };
  }
  render() {
    return (
      <header className="header">
        <div className="header-bar">
          <Link to="/" className="brand-name">
            Port <span>folio</span>
          </Link>
          <div className="menu-btn" onClick={this.toggle_nav}>
            <div className="menu-btn__burger"></div>
          </div>
        </div>
        <nav className="nav">
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <a href="#about" className="nav-link">
              About Us
            </a>
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
            <a href="#blog" className="nav-link">
              Blog
            </a>
            <a href="#contact" className="nav-link">
              Contact Us
            </a>
            <div className="toggle-container nav-link">
              <input
                type="checkbox"
                id="switch"
                name="theme"
                onClick={this.toggle_theme}
              />
              <label className="label" htmlFor="switch">
                Toggle
              </label>
            </div>
          </div>
          <a href="#contact" className="nav-btn">
            Hire me!
          </a>
        </nav>
      </header>
    );
  }
}
