import React, { useEffect, useState } from "react";
import TabSelectionMobile from "./TabSelection/TabSelectionMobile";
import SlideShow from "./Blog/SlideShow";
import ButtonMui from "./Util/ButtonMui";
//SANITY
import sanityClient from "../client.js";
// GSAP
import { Tween, Timeline } from "react-gsap";
//Lazy Loading
// const TabSelectionMobile = React.lazy(() => {
//   return new Promise((resolve) => setTimeout(resolve, 1 * 2000)).then(() =>
//     import("./TabSelection/TabSelectionMobile")
//   );
// });

export default function Home() {
  //SANITY DATAs
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
              <Timeline
              // target={
              //   <div
              //     style={{
              //       width: "100px",
              //       height: "100px",
              //       background: "#ccc",
              //     }}
              //   />
              // }
              >
                <Tween from={{ opacity: 0 }} duration={1}>
                  <div
                    className="imgSector bubble"
                    style={{
                      background: `url(${post.imageHome.asset.url})`,
                    }}
                  >
                    {/* <img src={post.imageHome.asset.url} alt="" /> */}
                  </div>
                </Tween>

                <div className="home">
                  <h5>Broadcast Journalist</h5>
                  {/* <h2>{post.title}</h2> */}
                  <h2>Hello, I’m Maya Russell-Smith</h2>

                  <p>
                    I am a graduate from the broadcast journalism course at
                    City, University of London, and have varied experience in
                    producing and editing content for TV.
                  </p>

                  <div className="buttonContainer">
                    <ButtonMui
                      link="#contact"
                      css="button"
                      variant="contained"
                      text="Contact"
                    />
                    <ButtonMui
                      link={post.link}
                      css="button"
                      variant="outlined"
                      text="LinkedIn"
                      target="_blank"
                    />
                  </div>
                </div>
              </Timeline>
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
