import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const Contacts = () => {
  return (
    <>
      <div className="container contact" id="contacts">
        <h1>Contact Me</h1>
        <div 
         className="contact-icon"
         data-aos = "zoom-in-up"
         data-aos-duration="1000"
        >

          <a href="https://www.instagram.com/ahiran_jhunnna_007/" target="_blank" className="items"><FaInstagram className="icons"/></a>

          <a href="https://www.google.com" className="items"><CiFacebook className="icons"/></a>

          <a  href="https://www.linkedin.com/in/jhunnakumar2003" className="items"><CiLinkedin className="icons"/></a>

          <a href="https://www.google.com" className="items"><FaXTwitter className="icons"/></a>
          
          <a href="https://github.com/jhunnaroy" className="items"><FaGithubSquare className="icons"/></a>

          <a href="mailto:jhunnakumarbth2003" className="items"><SiGmail className="icons"/></a>

          <a href="https://leetcode.com/u//jhunnakumarbth2003/" className="items"><SiLeetcode className="icons"/></a>

        </div>
      </div>
    </>
  );
};
export default Contacts;
