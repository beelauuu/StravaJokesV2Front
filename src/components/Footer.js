import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStrava,
} from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      name: "Github",
      url: "https://github.com/beelauuu",
      icon: faGithub,
    },
    {
      name: "Strava",
      url: "https://www.strava.com/athletes/41098360",
      icon: faStrava,
    },
  ];

  const renderSocialLinks = () => {
    return socialLinks.map((link, index) => (
      <a
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`social-link ${link.name.toLowerCase()}`}
      >
        <FontAwesomeIcon icon={link.icon} className="social-icon" />
      </a>
    ));
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="made-by-text">© Brian Lau</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="social-links">
              {renderSocialLinks()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
