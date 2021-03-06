import React from "react";
import GifCard from "../../components/gifCard";
import style from "./style.module.css";
import { useEffect } from "react";
import { getTrendingImage } from "../../library/giphy";
import { useDispatch, useSelector } from "react-redux";
import { storeImage } from "../../redux/store/gifs";


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
              <GifCard
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
