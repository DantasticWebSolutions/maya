import React from "react";
import Button from "@mui/material/Button";

const ButtonMui = (props) => {
  return (
    <a
      href={props.link}
      target={props.target}
      rel="noreferrer"
      // className="button2"
    >
      <Button type={props.type} className={props.css} variant={props.variant}>
        {props.text}
      </Button>
    </a>
  );
};

export default ButtonMui;
