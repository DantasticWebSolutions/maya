import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialIcons = () => {
  return (
    <div className="infoContainer">
      <div className="infoText">
        <h2>Let's get in touch</h2>
        <p>I am open for any suggestion or just to have a chat</p>
      </div>
      <div className="iconContainer">
        <SocialIcon
          url="https://www.instagram.com/mayamoz/"
          fgColor="#fff"
          className="socialIcon"
        />
        <h5>@mayamoz</h5>
      </div>
      <div className="iconContainer">
        <SocialIcon
          url="https://www.youtube.com/channel/UCLBWjv_UpYZeCahMpPHhypQ/featured"
          fgColor="#fff"
          className="socialIcon"
        />
        <h5>@maya-russell-smith</h5>
      </div>
      <div className="iconContainer">
        <SocialIcon
          url="https://www.facebook.com/maya.russellsmith/"
          fgColor="#fff"
          className="socialIcon"
        />
        <h5>@maya.russellsmith</h5>
      </div>
      <div className="iconContainer">
        <SocialIcon
          url="https://twitter.com/mrussellsmith"
          fgColor="#fff"
          className="socialIcon"
        />
        <h5>@mrussellsmith</h5>
      </div>
      <div className="iconContainer">
        <SocialIcon
          url="https://www.linkedin.com/in/maya-russell-smith-a32a7a197/"
          fgColor="#fff"
          className="socialIcon"
        />
        <h5>@maya-russell-smith</h5>
      </div>
    </div>
  );
};

export default SocialIcons;
