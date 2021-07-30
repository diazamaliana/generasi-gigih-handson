import * as React from "react";
import GifImage from "../card";
import Style from "./style.module.css";

const GifList = ({ title, url, rating}) => {
  return (
    <div className={Style.Content}>
        <GifImage
            title={title}
            url={url}
            rating={rating}
          />
    </div>
  );
};
export default GifList;
