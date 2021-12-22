import React from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";
import "../../index.css";
import BlockContent from "@sanity/block-content-to-react";
import Button from "@mui/material/Button";

const PostSection = (props) => {
  return (
    <div className="singleBlogContenitor">
      <Link className="post" to={"/" + props.slug} key={props.slug}>
        <div className="imgContainer">
          <img src={props.mainImage} alt="" />
        </div>
        <div className="text">
          <p className="alignEnd">
            {props.releaseDate.slice(5, 7) === "01"
              ? "January"
              : props.releaseDate.slice(5, 7) === "02"
              ? "February"
              : props.releaseDate.slice(5, 7) === "03"
              ? "March"
              : props.releaseDate.slice(5, 7) === "04"
              ? "April"
              : props.releaseDate.slice(5, 7) === "05"
              ? "May"
              : props.releaseDate.slice(5, 7) === "06"
              ? "June"
              : props.releaseDate.slice(5, 7) === "07"
              ? "July"
              : props.releaseDate.slice(5, 7) === "08"
              ? "August"
              : props.releaseDate.slice(5, 7) === "09"
              ? "September"
              : props.releaseDate.slice(5, 7) === "10"
              ? "October"
              : props.releaseDate.slice(5, 7) === "11"
              ? "November"
              : props.releaseDate.slice(5, 7) === "12"
              ? "Decemer"
              : "Errore"}
            &nbsp;{props.releaseDate.slice(8, 10)},{" "}
            {props.releaseDate.slice(0, 4)}
          </p>
          <h5>{props.catTitle}</h5>
          <h2>{props.title}</h2>
          <div className="extraDescription">
            <BlockContent
              blocks={props.description}
              projectId={sanityClient.projectId}
              dataset={sanityClient.dataset}
            />
          </div>
          <Button className="button" variant="contained">
            Read More
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default PostSection;
