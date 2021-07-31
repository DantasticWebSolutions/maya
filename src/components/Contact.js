import React from "react";

import { SocialIcon } from "react-social-icons";
const Contact = () => {
  return (
    <div>
      <a href="mailto:mayarussellsmith@gmail.com">mayarussellsmith@gmail.com</a>
      <a href="tel:+447502381831">+44 07502381831</a>
      <div className="icons">
        <SocialIcon
          url="https://www.facebook.com/"
          fgColor="#fff"
          className="socialIcon"
        />
        <SocialIcon
          url="https://www.linkedin.com/"
          fgColor="#fff"
          className="socialIcon"
        />
        <SocialIcon
          url="https://www.instagram.com/eatingwithelisa/"
          fgColor="#fff"
          className="socialIcon"
        />
      </div>
    </div>
  );
};

export default Contact;
