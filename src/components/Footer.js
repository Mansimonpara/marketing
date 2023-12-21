import "./FooterStyles.css";
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaSkype,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bottom">
        <div>
          <img className="imglogo" src="/assets/logo.png" />

          <div className="icons">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />{" "}
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />{" "}
            <FaSkype size={20} style={{ color: "#fff", marginRight: "1rem" }} />{" "}
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />{" "}
            <FaInstagram
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />{" "}
            <FaPinterest
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>

        <div className="data">

          <div>
          <h4>Company</h4>
          <p>About us</p>
          <p>Services</p>
          <p>Projects</p>
          <p>Contact</p>
          </div>

          <div>
          <h4>Services</h4>
          <p>Mobile App Development</p>
          <p>Website Development</p>
          <p>AI Development</p>
          <p>Game Development</p>
          </div>

          <div>
            <h4>Contact Us</h4>
                <p>D-814,Ganesh Glory 11,jagatpur </p><p>Road,S.G.Highway,Gota,</p><p>Ahmedabad,Gujarat,382470</p>
                 <p>(+91) 7016660537</p>
                <p>info@demaze.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
