import React from "react";
import Button from "../button";
import Input from "../input";
import Style from "./style.module.css";

const GifSearch = ({handleSubmit, handleChange, query }) => {

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
