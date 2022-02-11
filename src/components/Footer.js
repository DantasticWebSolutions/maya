import React, { useEffect, useState } from "react";
// import Contact from "./Contact";
import Contact from "./Contact";
// import ContactForm from "./ContactForm";
import { Tween } from "react-gsap";
import sanityClient from "../client.js";
import "../index.css";
const Footer = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "home"]{
					title,
          slug,
          description,
          link
					}`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);
  return (
    <>
      {allPostsData &&
        allPostsData.map((post, index) => (
          <Tween from={{ opacity: 0 }} delay={5} duration={0.6}>
            <div className="footerContainer">
              <div id="contact" className="footer">
                <Contact />
              </div>
              <a
                target="_blank"
                href="https://dantastic.netlify.app/"
                className="poweredBy"
                rel="noreferrer"
              >
                Powered by Dantastic Web Solutions &copy;
              </a>
            </div>
          </Tween>
        ))}
    </>
  );
};

export default Footer;
