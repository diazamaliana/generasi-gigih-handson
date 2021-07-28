import { Link } from "react-router-dom";
import style from "./style.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar} style={{ textAlign: "center" }}>
      <Link to="/" className={style.link}>Home</Link>
      <Link to="/trending" className={style.link}>
        Trending
      </Link>
    </div>
  );
};

export default Navbar;
