import React from 'react';
import './Search.css';
//import components
import Button from '../components/Button';
import Input from '../components/Input';
import Screen from '../components/Screen';

//import data
import gif from '../data/Gif';


class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="window">
                    <Screen url={gif.url} title={gif.title}/>
                </div>
                 <form className="search-bar">
                    <Input></Input>
                    <Button>Search</Button>
                </form>
            </div> 
        );
    };
};

export default Search;