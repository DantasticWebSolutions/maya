// src/components/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import MorePostLikeThis from "./MorePostLikeThis";
import LogoAnimation from "../LogoAnimation";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

// const serializers = {
//   types: {
//     figure: ({ node: { asset, caption } }) => {
//       return <img src={asset} alt={caption} />;
//     },
//   },
// };

const serializers = {
  types: {
    mainImage: (props) => (
      <figure>
        <img
          src={urlFor(props.node.asset).width(600).url()}
          alt={props.node.alt}
        />
      </figure>
    ),
  },
};

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
        "catTitle": categories[]->title,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <LogoAnimation />;

  return (
    <div className="singlePost">
      <div className="swiperSlide">
        <div className="slideShowImg">
          <img src={urlFor(postData.mainImage).url()} alt="" />
        </div>
        <div className="slideShowDescription">
          {/* <h5>{postData.categories}</h5> */}
          <h5>{postData.catTitle}</h5>
          <h2>{postData.title}</h2>

          <BlockContent
            blocks={postData.description}
            projectId={sanityClient.projectId}
            dataset={sanityClient.dataset}
            serializers={serializers}
          />
        </div>
      </div>

      <div className="descriptionBody">
        <BlockContent
          blocks={postData.body}
          imageOptions={{ fit: "max" }}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
          serializers={serializers}
        />
      </div>

      <div className="author">
        <strong>Author:</strong>
        {/* <img src={urlFor(postData.authorImage).width(100).url()} alt="" /> */}
        <h4>{postData.name}</h4>
      </div>

      {/* MORE POST LIKE THIS */}
      <MorePostLikeThis category={postData.catTitle} title={postData.title} />
    </div>
  );
}
