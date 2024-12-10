import React from "react";
import {
  FaRegPaperPlane,
  FaTwitter,
  FaBasketballBall,
  FaBehance,
} from "react-icons/fa";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div class="footer-container">
      <div class="footer-content">
        <span>
          <h2 class="footer-title">
            Looking for the Best IT Business Solutions?
          </h2>
          <p class="footer-description">
            As a app web crawler expert, We will help to organize.
          </p>
        </span>
        <div class="footer-button">Get a quote</div>
      </div>
      <div class="footer-middle">
        <div class="footer-grid">
          <div class="footer-column">
            <h3 class="footer-heading">Itfirm</h3>
            <p class="footer-text">
              We work with a passion of taking challenges and creating new ones
              in advertising sector
            </p>
            <div class="footer-link">About us</div>
          </div>
          <div class="footer-column">
            <h3 class="footer-heading">Newsletter</h3>
            <div class="footer-divider"></div>
            <p class="footer-text">
              Subscribe our newsletter to get our latest update & news.
            </p>
            <div class="footer-subscribe">
              <input
                type="email"
                placeholder="your email address"
                class="footer-input"
              />
              <div class="footer-submit">
                <FaRegPaperPlane size={20} color="white" />
              </div>
            </div>
            <div class="footer-socials">
              <div class="footer-social-icon">
                <FaFacebookF
                  size={16}
                  className="text-gray-700 hover:text-[#089BFF]"
                />
              </div>
              <div class="footer-social-icon">
                <FaTwitter
                  size={16}
                  className="text-gray-700 hover:text-[#089BFF]"
                />
              </div>
              <div class="footer-social-icon">
                <FaBasketballBall
                  size={16}
                  className="text-gray-700 hover:text-[#089BFF]"
                />
              </div>
              <div class="footer-social-icon">
                <FaBehance
                  size={20}
                  className=" text-gray-700 hover:text-[#089BFF]"
                />
              </div>
            </div>
          </div>
          <div class="footer-column">
            <h3 class="footer-heading">Official info:</h3>
            <div class="footer-divider"></div>
            <div class="footer-info">
              <div class="footer-icon">
                <FaLocationDot size={15} color="white" />
              </div>
              <p class="footer-info-text">
                0 Commercial Road
                <br />
                Fratton, Australia
              </p>
            </div>
            <div class="footer-info">
              <div class="footer-icon">
                <FaPhoneAlt size={15} color="white" />
              </div>
              <p class="footer-info-text">
                0 Commercial Road
                <br />
                Fratton, Australia
              </p>
            </div>
            <div class="footer-hours">
              <h3 class="footer-hours-heading">Open Hours</h3>
              <p class="footer-hours-text">Mon – Sat: 8 am – 5 pm,</p>
              <p class="footer-hours-text">Sunday: CLOSED</p>
            </div>
          </div>
          <div class="footer-column">
            <h3 class="footer-heading">Gallery</h3>
            <div class="footer-divider"></div>
            <div class="footer-gallery">
              <img
                src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery1.jpg"
                alt="grid-img"
              />
              <img
                src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery2.jpg"
                alt="grid-img"
              />
              <img
                src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery3.jpg"
                alt="grid-img"
              />
              <img
                src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery4.jpg"
                alt="grid-img"
              />
              <img
                src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery5.jpg"
                alt="grid-img"
              />
              <img
                src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/gallery6.jpg"
                alt="grid-img"
              />
            </div>
          </div>
        </div>
        {/* <div class="footer-divider-line"></div> */}
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">©2024 Zimra All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
