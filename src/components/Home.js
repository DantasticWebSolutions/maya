import React, { useEffect, useState } from "react";
//SANITY
import sanityClient from "../client.js";
import TabSelectionMobile from "./TabSelection/TabSelectionMobile";

// import Post from "./Blog/Post"
import SlideShow from "./Blog/SlideShow";
import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";

export default function Home() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "home"]{
            title,
            description,
            link,
            titleTv,
            descriptionTv,
            imageHome{
                asset->{
                    _id,
                    url
                }
            },
  
		    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {allPostsData &&
        allPostsData.map((post) => (
          <div key={post.title}>
            {/* HOME PAGE */}
            <div className="homePage">
              <div className="sagomaMaya bubble">
                <img src={post.imageHome.asset.url} alt="" />
              </div>

              <div className="home ">
                <h5>Broadcast Journalist</h5>
                {/* <h2>{post.title}</h2> */}
                <h2>Hello, I’m Maya Russell-Smith</h2>
                <p>
                  I am a graduate from the broadcast journalism course at City,
                  University of London, and have varied experience in producing
                  and editing content for TV.
                </p>
                <div className="buttonContainer">
                  <a
                    href="#contact"
                    // className="button1"
                  >
                    <Button className="button" variant="contained">
                      Contact
                    </Button>
                  </a>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    // className="button2"
                  >
                    <Button className="button" variant="outlined">
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <TabSelectionMobile />
            {/* <TabSelection /> */}
            <h2 className="title marginBottom">Featured Posts</h2>
            <SlideShow />
            {/* <Post /> */}
          </div>
        ))}
    </div>
  );
}
