import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import Loader from "../../components/Loader";
import { getFavorites, getPhotoById } from "../../api/unsplash";
import "./style.css";

const FavoritePage = () => {
  const [favoritesPhotos, setFavoritesPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const favoriteIds = getFavorites();

    if (favoriteIds.length === 0) {
      setFavoritesPhotos([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    Promise.all(
      favoriteIds.map((id) => getPhotoById(id).then((res) => res.data))
    )
      .then((photos) => {
        setFavoritesPhotos(photos);
        setLoading(false);
      })
      .catch(() => {
        setError("Ошибка загрузки избранных фото");
        setLoading(false);
      });
  }, []);

  const noFavoritesMessage = (
    <p className="favorite-page__no-favorites">Вы еще не добавили избранные</p>
  );

  return (
    <div className="favorite-page">
      <Header />
      <div className="favorite-page__line" />
      <h1 className="favorite-page__title">Избранное</h1>

      {loading && <Loader />}
      {error && <p className="favorite-page__error">{error}</p>}

      {!loading &&
        !error &&
        (favoritesPhotos.length > 0 ? (
          <Gallery gallerys={favoritesPhotos} />
        ) : (
          noFavoritesMessage
        ))}
    </div>
  );
};

export default FavoritePage;
