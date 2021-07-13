import React from 'react';
import '../components/Search.css'

class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="window">
                    <img id="screen" src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif" alt="imag-gif"/>
                </div>
                 <form className="search-bar">
                    <input type="text" placeholder="Search here..."/>
                    <button type="submit" className="btn-primary"><span>Search</span></button>
                </form>
            </div> 
        )
    }
}

export default Search;