import React from "react";
import "./styles.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import { RWebShare } from "react-web-share";

const Footer = () => {
  return (
    <div className="footer__">
      <a href="/">
        <h2>CrytoTracker.</h2>
      </a>
      <div className="footer__socials-flex">
        <a href="https://www.facebook.com/profile.php?id=100008248720667">
          <FacebookIcon className="socials-icon" />
        </a>
        <a href="https://www.instagram.com/m.r_freak/">
          <InstagramIcon className="socials-icon" />
        </a>
        <a href="mailto: krishfredrick11gmail.com">
          <EmailIcon className="socials-icon" />
        </a>
        <RWebShare
          data={{
            text: "Crypto Dashboard made using React JS in 2022",
            url: "https://crypto-appie.netlify.app/",
            title: "Crypto Dashboard",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <SendIcon className="socials-icon" />
        </RWebShare>
      </div>
    </div>
  );
};

export default Footer;
