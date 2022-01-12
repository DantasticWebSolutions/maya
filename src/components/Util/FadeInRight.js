import React from "react";
import { Tween } from "react-gsap";

const FadeInRight = ({ children }) => (
  <Tween
    from={{ opacity: 0, transform: "translate3d(100vw, 0, 0)" }}
    ease="easeInOut"
  >
    {children}
  </Tween>
);

export default FadeInRight;
