import React from "react";
import "./styles.css";

interface ISearchBox {
  handleSubmit: React.FormEventHandler<HTMLFormElement> 
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  query: string
}


const GifSearch = ({handleSubmit, handleChange, query } : ISearchBox) => {

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" onChange={handleChange} data-testid="search-box" value={query} placeholder="Search Gifs..." />
        <button className="btn"><span>Search</span></button>
      </form>
    </div>
  );
};
export default GifSearch;
