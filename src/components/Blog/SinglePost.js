// src/components/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
		 time,
		 description,
		 difficulty,
		 ingredients,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="singlePost ">
      <div className="swiperSlide">
        <div className="slideShowImg">
          <img src={urlFor(postData.mainImage).url()} alt="" />
        </div>
        <div className=" slideShowDescription">
          <h2>{postData.title}</h2>

          <BlockContent
            blocks={postData.description}
            projectId={sanityClient.projectId}
            dataset={sanityClient.dataset}
          />
        </div>
      </div>
      <div className="singlePostGrid">
        <div className="descriptionBody">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.projectId}
            dataset={sanityClient.dataset}
            className="ingridients"
          />
        </div>
        <div className="ingridientsBorder">
          <BlockContent
            blocks={postData.ingredients}
            projectId={sanityClient.projectId}
            dataset={sanityClient.dataset}
            className="ingridients"
          />
        </div>
      </div>
      <div className="author">
        <strong>Author:</strong>
        {/* <img src={urlFor(postData.authorImage).width(100).url()} alt="" /> */}
        <h4>{postData.name}</h4>
      </div>
    </div>
  );
}
