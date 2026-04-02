import { Link } from "react-router-dom";

import style from "./Style.module.css";
import wordIcon from "../../assets/worldIcon.png";
import homeIcon from "../../assets/homeIcon.png";
import searchIcon from "../../assets/searchIcon.png";

const Navbar = () => {
  return (
    <nav className={ style.main }>
      <div className={ style.iconContainer }>
        <img src={ wordIcon } alt="" />
        <h1>Register World!</h1>
      </div>
      <div className={ style.linksContainer }>
        <Link to="/teste" style={{ textDecoration: "none" }}>
          <img src={ homeIcon } alt="" />
          <span>Home</span>
        </Link>
        <Link to="/teste/user" style={{ textDecoration: "none" }}>
          <img src={ searchIcon } alt="" />
          <span>Register and search</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;