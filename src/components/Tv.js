import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div>
      <div className="flex">
        <h2>Here is a collection of my work for TV</h2>
        <p>
          All footage was filmed using a Panasonic AG-AC90AEJ camera, and edited
          using Adobe Premier Pro.
        </p>
      </div>
      <div className="blogContenitor">
        {allPostsData &&
          allPostsData.map((post) => (
            <div className="tvProjectsContenitor">
              <p>{post.title}</p>
              <BlockContent
                blocks={post.description}
                projectId={sanityClient.projectId}
                dataset={sanityClient.dataset}
              />
              <p>{post.link}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
