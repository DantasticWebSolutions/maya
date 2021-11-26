import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation, Pagination, A11y, Controller, Thumbs, Autoplay]);
const SlideShow = () => {
  //SANITY.IO data
  const [allPostsData, setAllPosts] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){
				title,
				slug,
				mainImage{
					asset->{
					  _id,
					  url
					 }
				   },
				 description,
			 }[0...3]`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  const [thumbsSwiper] = useState(null);
  const [controlledSwiper] = useState(null);
  return (
    <Swiper
      className="swiper"
      navigation
      thumbs={{ swiper: thumbsSwiper }}
      controller={{ control: controlledSwiper }}
      pagination={{ clickable: true }}
      spaceBetween={0}
      loop={true}
      // autoplay={{ delay: 3000, disableOnInteraction: false }}
      slidesPerView={1}
    >
      {allPostsData &&
        allPostsData.map((post, index) => (
          <Link to={"/" + post.slug.current} key={post.slug.current}>
            <SwiperSlide className="swiperSlide" key={index}>
              {console.log(post.time)}
              <div className="slideShowImg">
                <img src={post.mainImage.asset.url} alt={post.title} />
              </div>
              <div className="slideShowDescription">
                <h2>{post.title}</h2>
                <p>
                  <BlockContent
                    blocks={post.description}
                    projectId={sanityClient.projectId}
                    dataset={sanityClient.dataset}
                  />
                </p>

                <Link to={"/" + post.slug.current} key={post.slug.current}>
                  <div className="button1">View Recipe</div>
                </Link>
              </div>
            </SwiperSlide>
          </Link>
        ))}
    </Swiper>
  );
};

export default SlideShow;
