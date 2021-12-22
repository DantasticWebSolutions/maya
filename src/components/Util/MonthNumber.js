import React from "react";

const MonthNumber = (props) => {
  return <span>{props.date.slice(5, 7)}</span>;
};

export default MonthNumber;
