import React from "react";

const Month = (props) => {
  return (
    <span>
      {props.date.slice(5, 7) === "01"
        ? "January"
        : props.date.slice(5, 7) === "02"
        ? "February"
        : props.date.slice(5, 7) === "03"
        ? "March"
        : props.date.slice(5, 7) === "04"
        ? "April"
        : props.date.slice(5, 7) === "05"
        ? "May"
        : props.date.slice(5, 7) === "06"
        ? "June"
        : props.date.slice(5, 7) === "07"
        ? "July"
        : props.date.slice(5, 7) === "08"
        ? "August"
        : props.date.slice(5, 7) === "09"
        ? "September"
        : props.date.slice(5, 7) === "10"
        ? "October"
        : props.date.slice(5, 7) === "11"
        ? "November"
        : props.date.slice(5, 7) === "12"
        ? "December"
        : "Err0re"}
    </span>
  );
};

export default Month;
