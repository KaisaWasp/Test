import SearchInput from "../UI/SearchInput";
import "./style.css";

const SearchSection = ({
  query,
  handleInputChange,
  handleSearch,
  handleKeyDown,
}) => {
  return (
    <section className="search-section">
      <div className="search-section__inner">
        <SearchInput
          query={query}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          handleKeyDown={handleKeyDown}
        />
      </div>
    </section>
  );
};

export default SearchSection;
