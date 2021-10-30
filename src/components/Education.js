import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import "../index.css";

import TimeLine from "./TimeLine";

const Education = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "education"] | order(releaseDate desc){
          img,
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

  return (
    <div>
      {allPostsData &&
        allPostsData.map((post, index) => (
          <TimeLine
            date={post.date}
            img={post.img}
            name={post.name}
            title={post.title}
            description={post.description}
            releaseDay={post.releaseDate.slice(8, 10)}
            releaseMonth={post.releaseDate.slice(5, 7)}
            releaseYear={post.releaseDate.slice(0, 4)}
            finishDay={post.finishDate.slice(8, 10)}
            finishMonth={post.finishDate.slice(5, 7)}
            finishYear={post.finishDate.slice(0, 4)}
          />
        ))}
    </div>
  );
};

export default Education;
