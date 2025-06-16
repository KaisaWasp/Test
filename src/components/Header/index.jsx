import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import favoriteIcon from "../../assets/like-icon.svg";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="logo" className="header__logo" />
        <Link
          to="/favorites"
          className="header__favorite-block"
          aria-label="Перейти в избранное"
        >
          <img
            src={favoriteIcon}
            alt="heart"
            className="header__favorite-icon"
          />
          <p className="header__favorite-text">Избранное</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
