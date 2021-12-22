import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import "../../index.css";
import BlockContent from "@sanity/block-content-to-react";

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

  const [radioData, setRadioData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "home"]{
					  titleRadio,
            descriptionRadio,
            imageRadio{
                asset->{
                    _id,
                    url
                }
            },
					}`
      )
      .then((data) => setRadioData(data))
      .catch(console.error);
  }, []);
  return (
    <div className="singlePortfolio">
      <div className="headerSinglePortfolio">
        {radioData &&
          radioData.map((post, index) => (
            <div key={post.title} className="sector">
              <div
                className="imgSector bubble"
                style={{
                  background: `url(${post.imageRadio.asset.url})`,
                }}
              ></div>
              <div className="textSector">
                <h2 className="title">{post.titleRadio} Portfolio</h2>
                <hr />
                <div className="description">
                  <BlockContent
                    blocks={post.descriptionRadio}
                    projectId={sanityClient.projectId}
                    dataset={sanityClient.dataset}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="titolo">
        <h2>My Radio Projects</h2>
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
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
      </div>
      <p>REad Tv and Articles</p>
    </div>
  );
}
