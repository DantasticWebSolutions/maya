import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
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
const LastRadio = () => {
  //SANITY.IO data
  const [allPostsData, setAllPosts] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){
            title,
            slug,
            description,
            link
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
      //   breakpoints={{
      //     // when window width is >= 640px
      //     640: {
      //       width: 640,
      //       slidesPerView: 1,
      //     },
      //     // when window width is >= 768px
      //     768: {
      //       width: 768,
      //       slidesPerView: 2,
      //     },
      //   }}
    >
      {allPostsData &&
        allPostsData.map((post, index) => (
          <Link to={"/" + post.slug.current} key={post.slug.current}>
            <SwiperSlide className="swiperSlide" key={index}>
              {console.log(post.time)}

              <iframe
                className="frameSlideShow"
                src={post.link}
                title={post.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <div className="slideShowDescription">
                {/* <h5>{post.categories}</h5> */}
                <h2>{post.title}</h2>
                <p>{post.description}</p>

                <Link to={"/" + post.slug.current} key={post.slug.current}>
                  <div className="button1">Read More</div>
                </Link>
              </div>
            </SwiperSlide>
          </Link>
        ))}
    </Swiper>
  );
};

export default LastRadio;
