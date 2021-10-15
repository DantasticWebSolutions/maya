import React from "react";

const TimeLine = (props) => {
  return (
    <div>
      <div className="timeline">
        <div className="element">
          <div className="date">
            <p>{props.date}</p>
            <div className="ball"></div>
          </div>
          <div className="description">
            <div className="logo">
              <img src={props.img} alt="The Sun logo" />
            </div>
            <div className="descriptionTxt">
              <h2>{props.title}</h2>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
