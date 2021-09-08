import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import "../index.css";

export default function Radio() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "radio"]{
					title,
          slug,
          description,
          link
					}`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="singlePortfolio">
      <div className="containerImg">
        <div
          className="imgSinglePortfolio parallax"
          // style={{
          //   background: `url(https://cdn.sanity.io/images/ypkrx7ew/production/71b6514b5b854aa74330c86e31d94cacd37dac32-768x1024.jpg)`,
          // }}
          style={{
            background: `url(https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHJhZGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format)`,
          }}
        >
          <div className="flex blur brightness80">
            <h1 className="portfolioTitle">RADIO PORTFOLIO</h1>
            <hr />
            <p>
              Here is a collection of my radio work. <br /> A combination of my
              work for Warwick’s student radio station, RAW1251am, and City
              News. <br />
              <br />
            </p>
            <div className="logos"></div>
          </div>
        </div>
      </div>
      <div className="titolo">
        <h2>My Projects</h2>
      </div>
      <div className="progettiContainer">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <div
              className={`progetto ${index % 2 === 0 ? "normal" : "reverse"}`}
            >
              <div className="text">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>

              <iframe
                className="frame"
                src={post.link}
                title={post.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          ))}
      </div>
    </div>
  );
}
