import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
//SANITY
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

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
            imageTv{
                asset->{
                    _id,
                    url
                }
            },
            titleRadio,
            descriptionRadio,
            imageRadio{
                asset->{
                    _id,
                    url
                }
            },
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
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {allPostsData &&
        allPostsData.map((post) => (
          <div>
            <div
              className="home"
              style={{
                background: `url(${post.imageHome.asset.url})`,
              }}
            >
              <h2>{post.title}</h2>
              <BlockContent
                blocks={post.description}
                projectId={sanityClient.projectId}
                dataset={sanityClient.dataset}
              />
              <div className="flexRow">
                <a href={post.link}>
                  <div class="button blue">
                    <div id="dub-arrow">
                      <img
                        src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"
                        alt=""
                      />
                    </div>
                    {/* Follow Me */}
                    <a href={post.link}>Follow Me</a>
                  </div>
                </a>
                <a href="#contact">
                  <div class="button green">
                    <div id="dub-arrow">
                      <img
                        src="https://image.flaticon.com/icons/png/512/733/733443.png"
                        alt=""
                      />
                    </div>
                    {/* Follow Me */}
                    <a href={post.link}>Contact</a>
                  </div>
                </a>
              </div>
              {/* <button class="learn-more">Twitter</button> */}
              {/* <a href={post.link}><button>Twitter</button></a> */}

              {/* <img src={post.imageTv.asset.url} alt="" />
            <img src={post.imageHome.asset.url} alt="" /> */}
            </div>
            <div className="sectors">
              <div className="sector">
                <img
                  className="imgSector"
                  src={post.imageTv.asset.url}
                  alt="TV Portfolio"
                />
                <div className="title">{post.titleTv}</div>
                <div className="description">
                  <BlockContent
                    blocks={post.descriptionTv}
                    projectId={sanityClient.projectId}
                    dataset={sanityClient.dataset}
                  />
                </div>
              </div>
              <div className="sector">
                <img
                  className="imgSector"
                  src={post.imageRadio.asset.url}
                  alt="Radio Portfolio"
                />
                <div className="title">{post.titleRadio}</div>
                <div className="description">
                  <BlockContent
                    blocks={post.descriptionTv}
                    projectId={sanityClient.projectId}
                    dataset={sanityClient.dataset}
                  />
                </div>
              </div>
              <div className="sector">
                <img
                  className="imgSector"
                  src={post.imageArticles.asset.url}
                  alt="Articles Portfolio"
                />
                <div className="title">{post.titleArticles}</div>
                <div className="description">
                  <BlockContent
                    blocks={post.descriptionArticles}
                    projectId={sanityClient.projectId}
                    dataset={sanityClient.dataset}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
