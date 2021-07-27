import React from "react";
//import { useState } from "react";
import Button from "../button";
import Input from "../input";
import Style from "./style.module.css";

const GifSearch = ({handleSubmit, handleChange, query }) => {
  // const [inputQuery, setinputQuery] = useState("");
  // const handleChangeInput = (e) => {
  //   setinputQuery(e.target.value);
  // };

  // const handleSubmitGiphy = (e) => {
  //   e.preventDefault();
  //   props.handleQuery(inputQuery);
  // };

  return (
    <div className={Style.searchBar}>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="query" onChange={handleChange} value={query} placeholder="Search Gifs..." />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};
export default GifSearch;
