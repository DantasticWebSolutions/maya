import React, { useEffect, useState } from "react";
//SANITY
import sanityClient from "../client.js";
import TabSelection from "./TabSelection";

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
          <div>
            {/* HOME PAGE */}
            <div className="homePage">
              {/* <div
                className="sagomaMaya "
                style={{
                  background: `url(${post.imageHome.asset.url})`,
                }}
              ></div> */}
              <div className="sagomaMaya bubble">
                <img src={post.imageHome.asset.url} alt="" />
              </div>

              <div className="home ">
                <h5>Broadcast Journalist</h5>
                {/* <h2>{post.title}</h2> */}
                <h2>Hello, I’m Maya Russell-Smith</h2>
                {/* <BlockContent
                blocks={post.description}
                projectId={sanityClient.projectId}
                dataset={sanityClient.dataset}
              /> */}
                <p>
                  I am a graduate from the broadcast journalism course at City,
                  University of London, and have varied experience in producing
                  and editing content for TV.
                </p>
                <div className="buttonContainer">
                  <a href="#contact" className="button1">
                    Contact
                  </a>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="button2"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <TabSelection />
          </div>
        ))}
    </div>
  );
}
