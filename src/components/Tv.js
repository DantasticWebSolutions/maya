import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import "../index.css";

export default function Post() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "tv"]{
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
            background: `url(https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop)`,
          }}
        >
          <div className="flex blur">
            <h1>TV PORTFOLIO</h1>
            <hr />
            <h2>Here is a collection of my work for TV</h2>
            <p>
              All footage was filmed using a Panasonic AG-AC90AEJ camera, and
              edited using Adobe Premier Pro.
            </p>
            <div className="logos">
              <img
                className="icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Adobe_Premiere_Pro_Logo.svg/1200px-Adobe_Premiere_Pro_Logo.svg.png"
                alt="Adobe Premiere Pro"
              />
              <img
                className="icon"
                src="data:image/jpeg;base64,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"
                alt="Panasonic"
              />
            </div>
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
