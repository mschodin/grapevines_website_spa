import React, { Component } from "react";
import logo from "../media/Grapevines-circle.png";
// import logo from "../media/Grapevines-logo-cropped.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };
    
      render() {
        return (
          <nav className="nav" id="navbar">
            <div className="nav-content">
              <img
                src={logo}
                className="nav-logo"
                alt="Logo"
                onClick={this.scrollToTop}
              />
              <ul className="nav-items">
                
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                      Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Tour
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Listen
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Media
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        );
      }
}