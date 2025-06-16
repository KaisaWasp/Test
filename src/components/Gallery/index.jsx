import { useNavigate } from "react-router-dom";
import "./style.css";

const Gallery = ({ gallerys }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/photo/${id}`);
  };

  return (
    <div className="gallery-grid">
      {gallerys.slice(0, 8).map((img, index) => (
        <div
          key={img.id}
          className="gallery-grid__item"
          onClick={() => handleClick(img.id)}
        >
          <img
            src={img.urls.small}
            alt={img.alt_description || `gallery-${index}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
