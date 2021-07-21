import React from "react";
import { useState } from "react";
import SearchBar from "../../components/searchBar";
import GifList from "../../components/gifList";

const Search = () => {
    const [query, setQuery] = useState("mario");

    const handleQuery = (q) => {
      setQuery(q);
      //console.log(query);
    };
  
    return (
      <div>
          
        <SearchBar handleQuery={handleQuery} />
        <GifList giphyName={query} />
      </div>
    );
}

export default Search;
