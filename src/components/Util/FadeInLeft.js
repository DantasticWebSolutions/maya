import React from "react";
import { Tween } from "react-gsap";

const FadeInLeft = ({ children }) => (
  <Tween
    from={{ opacity: 0, transform: "translate3d(-100vw, 0, 0)" }}
    ease="back.out(1.4)"
  >
    {children}
  </Tween>
);

export default FadeInLeft;
