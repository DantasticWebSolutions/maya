import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import "../index.css";
import BlockContent from "@sanity/block-content-to-react";

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
          className="imgSinglePortfolio "
          style={{
            background: `url(https://cdn.sanity.io/images/ypkrx7ew/production/71b6514b5b854aa74330c86e31d94cacd37dac32-768x1024.jpg)`,
          }}
          // style={{
          //   background: `url(https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80)`,
          // }}
        >
          <div className="flex">
            <h1>TV PORTFOLIO</h1>
            <hr />
            <h2>Here is a collection of my work for TV</h2>
            <p>
              All footage was filmed using a Panasonic AG-AC90AEJ camera, and
              edited using Adobe Premier Pro.
            </p>
          </div>
        </div>
      </div>
      <div className="progettiContainer">
        {allPostsData &&
          allPostsData.map((post) => (
            <div className="progetto">
              <div className="text">
                <h2>{post.title}</h2>
                <BlockContent
                  className="description"
                  blocks={post.description}
                  projectId={sanityClient.projectId}
                  dataset={sanityClient.dataset}
                />
                <button>Button</button>
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
