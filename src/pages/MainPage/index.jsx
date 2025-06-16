import { useState, useEffect } from "react";
import Header from "../../components/Header";
import SearchSection from "../../components/SearchSection";
import Gallery from "../../components/Gallery";
import { getPhotos, searchPhotos } from "../../api/unsplash";

const MainPage = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos().then((res) => setPhotos(res.data));
  }, []);

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleSearch = () => {
    if (query.trim()) {
      searchPhotos(query).then((res) => setPhotos(res.data.results));
    } else {
      getPhotos().then((res) => setPhotos(res.data));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div>
      <Header />
      <SearchSection
        query={query}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
      />
      <Gallery gallerys={photos} />
    </div>
  );
};

export default MainPage;
