import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";
import "../../index.css";
import BlockContent from "@sanity/block-content-to-react";

export default function Post() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){
					title,
					slug,
					mainImage{
						asset->{
						  _id,
						  url
						 }
					   },
					 time,
					 description,
					 difficulty
					}`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <section className="blogContenitor">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link
              className="post"
              to={"/" + post.slug.current}
              key={post.slug.current}
            >
              <div className="imgContainer">
                <img src={post.mainImage.asset.url} alt="" />
              </div>
              <div className="text">
                <h2>{post.title}</h2>
                <div className="extraDescription">
                  <BlockContent
                    blocks={post.description}
                    projectId={sanityClient.projectId}
                    dataset={sanityClient.dataset}
                  />
                </div>

                <Link
                  to={"/" + post.slug.current}
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "black",
                    color: "white",
                  }}
                  // whileFocus={{
                  // 	scale: 0.8
                  // }}
                >
                  <div className="button">
                    <span>Read More</span>
                  </div>
                </Link>
              </div>
            </Link>
          ))}
      </section>
    </div>
  );
}
