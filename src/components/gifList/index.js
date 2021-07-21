import * as React from "react";
//import GifList from "./GifList.js";
import { useState, useEffect } from "react";
import GifImage from "../card";
import Style from "./style.module.css";

const GifList = (props) => {
  const [listGiphy, setListGiphy] = useState([]);
  const GIPHY_API = process.env.REACT_APP_GIPHY_KEY;

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${props.giphyName}&api_key=${GIPHY_API}&rating=g&limit=12`
    )
      .then((response) => response.json())
      .then((giphy) => {
        setListGiphy(giphy.data);
      });  // eslint-disable-next-line
  }, [props.giphyName], [GIPHY_API]);

  return (
    <div className={Style.Content}>
      {listGiphy.length !== 0
        ? listGiphy.map((gif, id) =>
        <GifImage
            key={id}
            title={gif.title}
            url={gif.images.original.url}
            rating={gif.rating}
        />)
        : ""}
    </div>
  );
};
export default GifList;
