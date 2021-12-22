import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialIcons = () => {
  return (
    <div>
      <div className="icons">
        <SocialIcon
          url="https://www.instagram.com/mayamoz/"
          fgColor="#fff"
          className="socialIcon"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCLBWjv_UpYZeCahMpPHhypQ"
          fgColor="#fff"
          className="socialIcon"
        />

        <SocialIcon
          url="https://www.facebook.com/maya.russellsmith/"
          fgColor="#fff"
          className="socialIcon"
        />
        <SocialIcon
          url="https://twitter.com/mrussellsmith"
          fgColor="#fff"
          className="socialIcon"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/maya-russell-smith-a32a7a197/"
          fgColor="#fff"
          className="socialIcon"
        />
      </div>
    </div>
  );
};

export default SocialIcons;
