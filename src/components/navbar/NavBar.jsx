import { useState } from "react";
import "./NavBar.css"; // Link your CSS here
import logo_image from "../../assets/icons/RF - Black.ico"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo fade-in-nav">
          <div className="logo-image logo-circles">
            <img src={logo_image} alt="RF Logo" />
          </div>

          <div className="logo-circles">
            <div id="circle1"></div>
            <div id="circle2"></div>
            <div id="circle3"></div>
            <div id="circle4"></div>
          </div>
        </div>

        <div className={`nav-headers ${isOpen ? "open" : ""}`}>
          <ul>
            <li className="fade-in-nav">
              <a href="#project-section">WORKS</a>
            </li>
            <li className="fade-in-nav">
              <a href="#tech-section">SKILLS</a>
            </li>
            <li className="fade-in-nav">
              <a href="#contact-section">CONTACT</a>
            </li>
          </ul>
        </div>

        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
