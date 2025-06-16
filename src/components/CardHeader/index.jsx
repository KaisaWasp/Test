import IconButton from "../UI/IconButton";
import LikeIcon from "../../assets/like-black-icon.svg?react";
import DwownloadIcon from "../../assets/download-icon.svg?react";
import "./style.css";

const CardHeader = ({
  profileName,
  nickname,
  avatar,
  isFavorite,
  onAddFavorite,
  onRemoveFavorite,
}) => {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFavorite();
    } else {
      onAddFavorite();
    }
  };

  return (
    <div className="card-header">
      <div className="card-header__profile">
        <img
          className="card-header__avatar"
          src={avatar}
          alt={`${profileName} avatar`}
        />
        <div className="card-header__info">
          <p className="card-header__name">{profileName}</p>
          <p className="card-header__nickname">@{nickname}</p>
        </div>
      </div>
      <div className="card-header__actions">
        <IconButton
          svgIcon={<LikeIcon className={isFavorite ? "liked" : ""} />}
          className="card-header__actions__favorite-btn"
          onClick={handleFavoriteClick}
        />
        <IconButton
          svgIcon={<DwownloadIcon />}
          className="card-header__actions__download-btn"
          text="Download"
        />
      </div>
    </div>
  );
};

export default CardHeader;
