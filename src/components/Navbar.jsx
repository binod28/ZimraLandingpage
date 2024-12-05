import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <div className="left-section">
            <div className="text-info">
              <p className="discount-offer">50% off on</p>
              <p className="annual-plan">annual plans!</p>
              <p className="cyber-sale">Cyber sales Ends in</p>
            </div>
            <div className="countdown">03</div>
            <div className="countdown">10</div>
            <div className="countdown">30</div>
            <div className="countdown">5</div>
          </div>
          <div className="right-section">
            <div className="partner-button">
              <p>Become a Partner</p>
              <span>&#9660;</span>
            </div>
            <div className="demo-button">
              <span>&#128197;</span>
              <p>Book a demo</p>
            </div>
            <div className="login-button">
              <span>&#128100;</span>
              <p>Login</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="logo">
            <img src="/assets/logo/Zimra.jpg" alt="logo" className="logo-img" />
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="">100+CRM Integration</a>
              <span className="arrow">
                <IoIosArrowDown size={14} color="black" />
              </span>
            </li>
            <li className="nav-item">
              <a>AI Products</a>
              <span className="arrow">
                <IoIosArrowDown />
              </span>
            </li>
            <li className="nav-item">
              <a>Solution</a>
              <span className="arrow">
                <IoIosArrowDown />
              </span>
            </li>
            <li>Pricing</li>
            <li className="nav-item">
              <a>Free Tool</a>
              <span className="arrow">
                <IoIosArrowDown />
              </span>
            </li>
            <li className="nav-item">
              <a>Resource</a>
              <span className="arrow">
                <IoIosArrowDown />
              </span>
            </li>
          </ul>
          <div className="cta">Get started</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
