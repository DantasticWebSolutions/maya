import React from "react";

const YearNumber = (props) => {
  return <span>{props.date.slice(0, 4)}</span>;
};

export default YearNumber;
