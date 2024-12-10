import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import useTypeWriter from "../hooks/useTypeWriter";
const data = [
  "https://krispcall.com/wp-content/uploads/2023/11/Pipedrive.png",
  "https://krispcall.com/wp-content/uploads/2023/10/hubspot-favicon.svg",
  "https://krispcall.com/wp-content/uploads/2024/03/intercom-logo.png",
  "https://krispcall.com/wp-content/uploads/2023/12/zapier-black-92x92-1.png",
  "https://krispcall.com/wp-content/uploads/2024/03/Nimble-logo.png",
  "https://krispcall.com/wp-content/uploads/2023/11/Salesforce.png",
  "https://krispcall.com/wp-content/uploads/2024/02/crisp-integration-logo.png",
  "https://krispcall.com/wp-content/uploads/2023/11/zendesk-logo.png",
  "https://krispcall.com/wp-content/uploads/2024/02/Keap-Integration-logo.png",
];
const HeroSection = () => {
  const heroText = "Customer Experience Platform";
  const speed = 50;
  const displayText = useTypeWriter({ text: heroText, speed: 60 });
  return (
    <div className="hero-container 3xl:h-screen">
      <div className="hero-content">
        <h1 className="hero-heading">
          <p className="hero-highlight">AI powered modern phone app for your</p>

          <p className="typewriter">
            {displayText}
            <span className="blinking-cursor"></span>
          </p>
        </h1>

        <p className="description-text">
          Bring advanced telephony capabilities inside your CRM platforms with
          KrispCall
        </p>

        <div className="action-buttons">
          <div className="demo-button">
            <IoCalendarOutline size={18} color="black" />
            <p className="button-text">Book a demo</p>
          </div>
          <div className="get-started-button">Get started</div>
        </div>
        <div className="logos-section">
          <div className="logos-container">
            <div className="logo-wrapper">
              {data.map((item) => (
                <div className="logo-item">
                  <img src={item} alt="company-logo" className="logo-img" />
                </div>
              ))}
            </div>
            <p>
              <strong>100+ CRM</strong> integrations for streamlined
              collaboration now on
              <strong className="text-[#002653] font-bold ">&nbsp;ZIMRA</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img
          src="https://krispcall.com/wp-content/uploads/2024/08/home-page-KrispCall-AI-powered-modern-phone-app-for-your-team-scaled.webp"
          alt="screenshots"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
