import React, { useEffect, useState } from "react";
import sanityClient from "../../client";
import "../../index.css";
import PostSection from "./PostSection";

const Post = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(releaseDate desc){
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
          releaseDate,
          "catTitle": categories[]->title,
					}`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <section className="blogContenitor">
        {allPostsData &&
          allPostsData.map((post) => (
            <PostSection
              key={post.title}
              slug={post.slug.current}
              mainImage={post.mainImage.asset.url}
              releaseDate={post.releaseDate}
              // releaseDay={post.releaseDate.slice(8, 10)}
              // releaseMonth={post.releaseDate.slice(5, 7)}
              // releaseYear={post.releaseDate.slice(0, 4)}
              title={post.title}
              description={post.description}
              catTitle={post.catTitle}
            />
          ))}
      </section>
    </div>
  );
};

export default Post;
