import "./styles.css";

interface IGifCard {
  title: string,
  url: string, 
  rating: string
}

const GifCard = ({ title, url, rating} : IGifCard) => {
  return (
    <div className="content">
        <div className="card">
          <div className="card_image">
              <img src={url}
                   alt={title} /> 
          </div>
          <div className="card_title">
              <p>{title} | {rating}</p>
          </div>
      </div>   
    </div>
  );
};
export default GifCard;
