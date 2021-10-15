import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import "../index.css";
import BlockContent from "@sanity/block-content-to-react";

import TimeLine from "./TimeLine";

const Education = () => {
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
    <div>
      <TimeLine
        date="Jan 2021"
        img="https://1000logos.net/wp-content/uploads/2021/05/The-Sun-logo.png"
        title="TITLE HERE"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dolorem deserunt non nostrum perspiciatis officia obcaecati voluptatem laboriosam, earum nobis."
      />
      <TimeLine
        date="Jan 2021"
        img="https://1000logos.net/wp-content/uploads/2021/05/The-Sun-logo.png"
        title="TITLE HERE"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dolorem deserunt non nostrum perspiciatis officia obcaecati voluptatem laboriosam, earum nobis."
      />
      <TimeLine
        date="Jan 2021"
        img="https://1000logos.net/wp-content/uploads/2021/05/The-Sun-logo.png"
        title="TITLE HERE"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dolorem deserunt non nostrum perspiciatis officia obcaecati voluptatem laboriosam, earum nobis."
      />
      <TimeLine
        date="Jan 2021"
        img="https://1000logos.net/wp-content/uploads/2021/05/The-Sun-logo.png"
        title="TITLE HERE"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dolorem deserunt non nostrum perspiciatis officia obcaecati voluptatem laboriosam, earum nobis."
      />
    </div>
  );
};

export default Education;
