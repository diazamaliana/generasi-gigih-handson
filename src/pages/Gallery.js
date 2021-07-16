import './Gallery.css';

//import data
import gif from '../data/Mario';

function Gallery(){
    
    const gifs = gif.map((gif, idx) => {
        if(gif.rating === "g")
            return (
                <div className="card" key={idx}>
                <div className="card_image">
                    <img src={gif.url}
                        alt={gif.title} /> 
                </div>
                <div className="card_title">
                    <p>{gif.title} | {gif.rating}</p>
                </div>
            </div>    
            );
        });
        
            
    return (
        <div className="card-list">{gifs}</div>       
    );

}
export default Gallery;