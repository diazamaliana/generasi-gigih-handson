 import React from 'react';
 import './Search.css';
 //import components
 import Button from '../components/Button';
 import GiphyWithSearch from "../components/GiphyList";
 import Input from '../components/Input';
 import Screen from '../components/Screen';
 

 //import data
 import gif from '../data/Gif';


  class Search extends React.Component {
    state = {
      search: "",
      data: [],
    };
  
    giphySearch = () => {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${this.state.search}&limit=12`
      )
        .then((response) => response.json())
        .then((response) => {
          this.setState({ data: response.data });
        });
    };


      render() {
          return (
              <div className="search">
                  <div className="window">
                      <Screen url={gif.url} title={gif.title}/>
                  </div>
                   <div className="search-bar">
                      <Input
                        value={this.state.search}
                        onChange={(e) => {
                          this.setState({ search: e.target.value });
                        }}
                        className="input-text"
                        type="text"
                        name="search"
                        placeholder="Search GIF..."></Input>

                      <Button
                        onClick={() => this.giphySearch()}
                        className="search-button"
                        type="button">
                      </Button>
                      
                      <div className="search-content">
                        {this.state.data?.map((gif, id) => {
                        return (
                          <GiphyWithSearch
                            key={id}
                            title={gif.title}
                            url={gif.images.original.url}
                            rating={gif.rating}
                          />
                        );
                      })}

                      </div>
                      

                  </div>
              </div> 
          );
      };
  };

 export default Search;

