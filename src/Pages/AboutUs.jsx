import React from "react";
import { FaLink } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <div className="leftrounded-container">
        <div>
          <div className="circle-share">
            <FaLink size={34} color="white" />
          </div>
        </div>
        <div className="leftrounded-container-details-container">
          <div className="leftrounded-details-wrapper">
            <div className="leftrouned-logo-container ">
              <div className="leftrounded-logo-wrapper">
                <img src="/assets/logo/customerservice.png" />
              </div>
            </div>
            <div className="details-section">
              <h3 className="details-title">Support Inquiries</h3>
              <p className="details-subtitle">
                Using any of our products and need help?
              </p>
              <span className="text-[16px] font-[800] text-black flex items-center">
                <p>Get Support</p>
                <IoIosArrowRoundForward size={20} color="black" />
              </span>
            </div>
          </div>

          <div className="leftrounded-details-wrapper-right">
            <div className="leftrouned-logo-container">
              <div className="leftrounded-logo-wrapper">
                <img src="/assets/logo/support.png" />
              </div>
            </div>

            <div className="details-section ">
              <h3 className="details-title">Partner Inquiries:</h3>
              <p className="details-subtitle">
                Looking for our partners? Browse our partner directory.
              </p>
              <span className="details-endtitle">
                <p>Find a Partner</p>
                <IoIosArrowRoundForward size={20} color="black" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* about your company */}

      <div className="aboutus-grid-container">
        <div className="aboutus-grid-wrapper">
          <div className="flex flex-col items-start gap-2  ">
            <h2 className="aboutus-grid-title">About our company</h2>
          </div>
          <div className="aboutus-grid-header-text">
            <span className="text-[32px] lg:text-[60px] text-black fira-sans-bold">
              Choose
            </span>
            <span className="text-[32px] pl-2 text-black lg:text-[50px] fira-sans-regular">
              The Best IT Service
            </span>
            <span className="text-[32px] lg:text-[60px] text-black fira-sans-bold pl-2">
              Company
            </span>
          </div>
          <div className="aboutus-grid-desc-wrapper">
            <p>
              An IT firm or MSP who keeps your IT running smoothly at all times
              is like a plumber who fixes your pipes; that’s what they are
              supposed to do. Many IT firms struggle.
            </p>
          </div>
          <div className="aboutus-service-container">
            <div className="aboutus-service-wrapper">
              <div className="about-service-logo-wrapper">
                <img
                  src="/assets/logo/support.png"
                  className="h-[54px] w-[54px] lg:h-[85px] lg:w-[85px]"
                />
              </div>
              <p className="aboutus-service-desc">
                MoneyBack <br />
                Gurentee
              </p>
            </div>
            <div className="aboutus-service-wrapper">
              <div className="about-service-logo-wrapper">
                <img
                  src="/assets/logo/customerservice.png"
                  className="h-[54px] w-[54px] lg:h-[85px] lg:w-[85px]"
                />
              </div>
              <p className="aboutus-service-desc">
                MoneyBack <br />
                Gurentee
              </p>
            </div>
          </div>
          <div className="aboutus-button-container">
            <div className="aboutus-button-wrapper">
              <div className="aboutus-contact-btn">
                <p>contact us</p>
                <IoIosArrowRoundForward size={22} color="white" />
              </div>

              <div className="aboutus-callbtn-container">
                <div className="aboutus-call-icon">
                  <FaPhoneAlt size={17} color="#002653" />
                </div>
                <div className="aboutuscall-desc-wrapper">
                  <p className="aboutus-desc">Call for help</p>
                  <strong className="aboutus-desc-text">
                    91 124 3467 2345
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <img
            src="https://demo.casethemes.net/itfirm/wp-content/uploads/2022/12/h8-banner1.png"
            alt="hero-image"
            className="object-cover grid-image "
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
