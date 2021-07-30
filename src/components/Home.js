import React, { useEffect, useState } from "react";

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
              <p>{post.title}</p>
              <BlockContent
                blocks={post.description}
                projectId={sanityClient.projectId}
                dataset={sanityClient.dataset}
              />
              <a href={post.link}>
                <button>Twitter</button>
              </a>

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
