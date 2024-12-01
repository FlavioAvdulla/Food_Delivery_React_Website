import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
		<img src="src/assets/tomato_logo_white.svg" alt="Tomato Logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
          <div className="footer-social-icons">
            <a href="https://www.behance.net/flavioavdulla">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.behance.net/flavioavdulla">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.behance.net/flavioavdulla">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.behance.net/flavioavdulla">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+355 67 63 11 918</li>
            <li>a.flavio4366@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Flavio Avdulla - All rights reserved
      </p>
    </div>
  );
};

export default Footer;
