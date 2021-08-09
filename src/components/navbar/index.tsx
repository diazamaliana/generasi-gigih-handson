import { Link } from "react-router-dom";
import "./styles.css";


const Navbar = () => {
  return (
     <div className="navbar" >
       <Link to="/" className="link">Home</Link>
       <Link to="/trending" className="link">
         Trending
       </Link>
     </div>
  );
};

export default Navbar;
