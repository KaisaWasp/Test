import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getPhotoById,
  addFavorite,
  removeFavorite,
  getFavorites,
} from "../../api/unsplash";
import Header from "../../components/Header";
import CardHeader from "../../components/CardHeader";
import Loader from "../../components/Loader";
import sizeIcon from "../../assets/size-icon.svg";
import "./style.css";

const CardInfoPage = () => {
  const { id } = useParams();
  const [photoData, setPhotoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPhotoById(id)
      .then((res) => {
        setPhotoData(res.data);
        const favs = getFavorites();
        setIsFavorite(favs.includes(id));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Ошибка загрузки фото");
        setLoading(false);
      });
  }, [id]);

  const handleAddFavorite = () => {
    try {
      addFavorite(id);
      setIsFavorite(true);
    } catch {
      alert("Не удалось добавить в избранное");
    }
  };

  const handleRemoveFavorite = () => {
    try {
      removeFavorite(id);
      setIsFavorite(false);
    } catch {
      alert("Не удалось удалить из избранного");
    }
  };

  return (
    <div>
      <Header />
      <div className="card-info-page__cover" />
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <CardHeader
            profileName={photoData.user.name}
            nickname={photoData.user.username}
            avatar={photoData.user.profile_image?.medium}
            isFavorite={isFavorite}
            onAddFavorite={handleAddFavorite}
            onRemoveFavorite={handleRemoveFavorite}
          />
          <div className="card-info-page__image-wrapper">
            <img
              src={photoData.urls?.regular}
              alt={photoData.alt_description || "image"}
              className="card-info-page__image"
            />
            <img
              src={sizeIcon}
              alt="size icon"
              className="card-image-wrapper__icon"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CardInfoPage;
