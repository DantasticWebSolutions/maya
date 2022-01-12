import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//SANITY
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
// import Button from "@mui/material/Button";
import ButtonMui from "../Util/ButtonMui";

export default function Portfolio() {
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
    <div className="portfolios">
      {allPostsData &&
        allPostsData.map((post) => (
          <div key={post.title}>
            {/* TV PAGE */}
            <div className="sectors">
              <div className="sector">
                <div
                  className="imgSector"
                  style={{
                    background: `url(${post.imageTv.asset.url})`,
                  }}
                ></div>
                <div className="textSector">
                  <h2 className="title">{post.titleTv} Portfolio</h2>
                  <hr />
                  <div className="description">
                    <BlockContent
                      blocks={post.descriptionTv}
                      projectId={sanityClient.projectId}
                      dataset={sanityClient.dataset}
                    />
                  </div>
                  <Link to="/tv">
                    <ButtonMui
                      css="button"
                      variant="outlined"
                      text="Read More"
                      target=""
                    />
                  </Link>
                </div>
              </div>
              {/* RADIO PAGE */}
              <div className="sector reverse">
                <div
                  className="imgSector"
                  style={{
                    background: `url(${post.imageRadio.asset.url})`,
                  }}
                ></div>
                <div className="textSector">
                  <h2 className="title">{post.titleRadio} Portfolio</h2>
                  <hr />
                  <div className="description">
                    <BlockContent
                      blocks={post.descriptionRadio}
                      projectId={sanityClient.projectId}
                      dataset={sanityClient.dataset}
                    />
                  </div>
                  <Link to="/radio">
                    <ButtonMui
                      css="button"
                      variant="outlined"
                      text="Read More"
                      target=""
                    />
                  </Link>
                </div>
              </div>
              {/* ARTICLES PAGE */}
              <div className="sector">
                <div
                  className="imgSector"
                  style={{
                    background: `url(${post.imageArticles.asset.url})`,
                  }}
                ></div>
                <div className="textSector">
                  <h2 className="title">{post.titleArticles} Portfolio</h2>
                  <hr />
                  <div className="description">
                    <BlockContent
                      blocks={post.descriptionArticles}
                      projectId={sanityClient.projectId}
                      dataset={sanityClient.dataset}
                    />
                  </div>
                  <Link to="/articles">
                    <ButtonMui
                      css="button"
                      variant="outlined"
                      text="Read More"
                      target=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
