import React from "react";

const DayNumber = (props) => {
  return <span>{props.date.slice(8, 10)}</span>;
};

export default DayNumber;
