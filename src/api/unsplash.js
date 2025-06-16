import axiosInstance from "./axiosInstance";

export const getPhotos = () => {
  return axiosInstance.get('/photos');
};

export const searchPhotos = (query) => {
  return axiosInstance.get('/search/photos', {
    params: { query }
  });
};

export const getPhotoById = (id) => {
  return axiosInstance.get(`/photos/${id}`);
};

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('favorites')) || [];
};

export const addFavorite = (id) => {
  const current = getFavorites();
  const updated = [...new Set([...current, id])];
  localStorage.setItem('favorites', JSON.stringify(updated));
};

export const removeFavorite = (id) => {
  const current = getFavorites();
  const updated = current.filter((favId) => favId !== id);
  localStorage.setItem('favorites', JSON.stringify(updated));
};
