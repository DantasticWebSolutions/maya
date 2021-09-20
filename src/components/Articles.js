import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import "../index.css";
import BlockContent from "@sanity/block-content-to-react";

export default function Articles() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "articles"]{
					title,
          slug,
          description,
          imgVideo,
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
          titleArticles,
          descriptionArticles,
            imageArticles{
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
            <div className="sector">
              <div
                className="imgSector"
                style={{
                  background: `url(${post.imageArticles.asset.url})`,
                }}
              ></div>
              <div className="textSector">
                <h2 className="title">{post.titleArticles} Portfolio</h2>
                <hr />
                <div className="description">
                  <BlockContent
                    blocks={post.descriptionArticles}
                    projectId={sanityClient.projectId}
                    dataset={sanityClient.dataset}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="titolo">
        <h2>My Digital Platform Projects</h2>
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

              {post.imgVideo === "video" ? (
                <iframe
                  className="frame video"
                  src={post.link}
                  title={post.title}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : (
                <img src={post.link} alt="image post" className="frame img" />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
