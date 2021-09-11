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

  const [tvData, setTvData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "home"]{
					  titleTv,
            descriptionTv,
            imageTv{
                asset->{
                    _id,
                    url
                }
            },
					}`
      )
      .then((data) => setTvData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="singlePortfolio">
      <div className="headerSinglePortfolio">
        {tvData &&
          tvData.map((post, index) => (
            <div className="sector">
              <div
                className="imgSector"
                style={{
                  background: `url(${post.imageTv.asset.url})`,
                }}
              ></div>
              <div className="textSector">
                <h2 className="title">{post.titleTv} Portfolio</h2>
                <hr />
                <div className="description">
                  <BlockContent
                    blocks={post.descriptionTv}
                    projectId={sanityClient.projectId}
                    dataset={sanityClient.dataset}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="titolo">
        <h2>My TV Projects</h2>
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
