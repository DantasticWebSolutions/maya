import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
              className="home parallax"
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
                  <div className="button blur blue">
                    <div id="dub-arrow" className="blur">
                      <img
                        src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"
                        alt=""
                      />
                    </div>
                    <a href={post.link}>Follow Me</a>
                  </div>
                </a>
                <a href="#contact">
                  <div class="button blur green">
                    <div id="dub-arrow">
                      <img
                        src="https://image.flaticon.com/icons/png/512/733/733443.png"
                        alt=""
                      />
                    </div>
                    <a href={post.link}>Contact</a>
                  </div>
                </a>
              </div>
            </div>
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
                    <div class="button greenColor green">
                      <div id="dub-arrow">
                        <img
                          src="https://image.flaticon.com/icons/png/512/5226/5226275.png"
                          alt="tv"
                        />
                      </div>
                      <span>Read More</span>
                    </div>
                  </Link>
                </div>
              </div>
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
                    <div class="button greenColor green">
                      <div id="dub-arrow">
                        <img
                          src="https://image.flaticon.com/icons/png/512/2958/2958571.png"
                          alt="radio"
                        />
                      </div>
                      <span>Read More</span>
                    </div>
                  </Link>
                </div>
              </div>
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
                    <div class="button greenColor green">
                      <div id="dub-arrow">
                        <img
                          src="https://image.flaticon.com/icons/png/512/2910/2910776.png"
                          alt="articles"
                        />
                      </div>
                      <span>Read More</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
