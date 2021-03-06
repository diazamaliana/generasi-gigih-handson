import React from "react";
import SearchBar from "../../components/searchBar";
import GifCard from "../../components/gifCard";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { getSearchImage } from "../../library/giphy";
import { useDispatch, useSelector } from "react-redux";
import { storeImage } from "../../redux/store/gifs";

const Search = () => {
  const images = useSelector((state) => state.gifs.images);
  const dispatch = useDispatch();
  useEffect(()=> {
    getSearchImage("cat").then((data) => {
      dispatch(storeImage(data.data));
    });
  }, [dispatch]);

    const [query, setQuery] = useState("");
    const onSearchChange = (e) => {
      setQuery(e.target.value);
    }

    const handleSubmitGiphy = (e) => {
      e.preventDefault();
      const query = e.target.query.value;
      getSearchImage(query).then((data)=> {
        dispatch(storeImage(data.data));
      });
    };
  
    return (
      <div style={{paddingTop:"60px"}}>
        <h1 style={{color: "white"}}>Search Gifs</h1>
        <SearchBar 
          handleSubmit = {handleSubmitGiphy}
          query = {query}
          handleChange = {onSearchChange}
        />
        <div className={style.wrapper}>
          {images.map((image) => {
          return (
              <GifCard
                key={image.id}
                title={image.title}
                url={image.images.fixed_height.url}
                rating = {image.rating}
              />
          );
        })}
        </div> 
      </div>
    );
}

export default Search;
