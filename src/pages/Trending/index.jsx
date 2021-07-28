import React from "react";
import GifImage from "../../components/card";
import style from "./style.module.css";
import { useEffect } from "react";
import { getTrendingImage } from "../../components/library/giphy";
import { useDispatch, useSelector } from "react-redux";
import { storeImage } from "../../redux/store/gifs";
//import gifs from "../../redux/store/gifs";
//import gif from "../../data/Mario";

const Trending = () => {
  const images = useSelector((state) => state.gifs.images);
  const dispatch = useDispatch();
  useEffect(()=> {
    getTrendingImage().then((data) => {
      dispatch(storeImage(data.data));
    });
  }, [dispatch]);

   
    return (
      <div style={{paddingTop:"60px"}}>
        <h1 style={{color: "white"}}>Trending Gifs</h1>
        <div className={style.wrapper}>
          {images.map((image) => (
              <GifImage
                key={image.id}
                title={image.title}
                url={image.images.fixed_height.url}
                rating = {image.rating}
              />
          ))}
        </div> 
      </div>
    );
}

export default Trending;
