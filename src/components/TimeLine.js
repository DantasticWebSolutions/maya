import React from "react";

const TimeLine = (props) => {
  return (
    <div className="timeline">
      <div className="element">
        <div className="date">
          <p>
            {props.releaseMonth === "01"
              ? "Jan"
              : props.releaseMonth === "02"
              ? "Feb"
              : props.releaseMonth === "03"
              ? "Mar"
              : props.releaseMonth === "04"
              ? "Apr"
              : props.releaseMonth === "05"
              ? "May"
              : props.releaseMonth === "06"
              ? "Jun"
              : props.releaseMonth === "07"
              ? "Jul"
              : props.releaseMonth === "08"
              ? "Aug"
              : props.releaseMonth === "09"
              ? "Sep"
              : props.releaseMonth === "10"
              ? "Oct"
              : props.releaseMonth === "11"
              ? "Nov"
              : props.releaseMonth === "12"
              ? "Dec"
              : "Err0re"}

            <br />

            {props.releaseYear}
          </p>
          <div className="ball"></div>
          <div className="line"></div>
        </div>
        <div className="description">
          <div className="logo resp">
            <img src={props.img} alt="The Sun logo" />
          </div>

          <div className="descriptionTxt">
            <h2>{props.title}</h2>
            <h5>{props.name}</h5>
            <h5>
              {props.releaseDay}/{props.releaseMonth}/{props.releaseYear} -{" "}
              {props.finishYear === "1999" ? (
                <span>Present</span>
              ) : (
                <span>
                  {props.finishDay}/{props.finishMonth}/{props.finishYear}
                </span>
              )}
            </h5>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
