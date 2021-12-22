import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import "../../index.css";
import "../../Timeline.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MonthName from "../Util/MonthName";
import DayNumber from "../Util/DayNumber";
import MonthNumber from "../Util/MonthNumber";
import YearNumber from "../Util/YearNumber";

const Education = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "education"] | order(releaseDate desc){
          imageHome{
            asset->{
                _id,
                url
            }
          },
          description,
          title,
          name,
          releaseDate,
          finishDate
					}`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  const animateFromTo = (elem, direction) => {
    const offset = 1000;
    let x = 0;
    let y = direction * offset;

    direction = direction | 1;

    if (elem.classList.contains("slide_from_left")) {
      x = -offset;
      y = 0;
    } else if (elem.classList.contains("slide_from_right")) {
      x = offset;
      y = 0;
    } else if (elem.classList.contains("slide_from_down")) {
      x = 0;
      y = offset;
    } else if (elem.classList.contains("slide_from_up")) {
      x = 0;
      y = -offset;
    }

    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        stagger: 0.33,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  };

  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".animate").forEach(function (elem) {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFromTo(elem);
        },
        // onEnterBack: function () {
        //   animateFromTo(elem, -1);
        // },
        // onLeave: function () {
        //   hide(elem);
        // },
      });
    });
  });

  return (
    <div className="timeline">
      <ul>
        {allPostsData &&
          allPostsData.map((te, index) => (
            <li key={te.title}>
              <div class="content">
                <img
                  className="slide_from_down animate"
                  alt={te.title}
                  src={te.imageHome.asset.url}
                />

                <h5 className="slide_from_down animate">{te.name}</h5>
                <h5 className="slide_from_down animate">
                  <DayNumber date={te.releaseDate} />/
                  <MonthNumber date={te.releaseDate} />/
                  <YearNumber date={te.releaseDate} /> -{" "}
                  {te.finishDate.slice(0, 4) === "1999" ? (
                    <span style={{ color: "var(--primary)" }}>Present</span>
                  ) : (
                    <span>
                      <DayNumber date={te.finishDate} />/
                      <MonthNumber date={te.finishDate} />/
                      <YearNumber date={te.finishDate} />
                    </span>
                  )}
                </h5>
                <h3 className="slide_from_down animate">{te.title}</h3>
                <p className="slide_from_down animate">{te.description}</p>
              </div>
              <div class="time slide_from_down animate">
                <h4>
                  {" "}
                  <MonthName date={te.releaseDate} />
                  &nbsp;
                  <YearNumber date={te.releaseDate} />
                </h4>
              </div>
            </li>
          ))}
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
};

export default Education;
