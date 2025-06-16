import searchIcon from "../../../assets/search-icon.svg";
import "./style.css";

const SearchInput = ({
  query,
  handleInputChange,
  handleSearch,
  handleKeyDown,
}) => {
  return (
    <div className="search-input">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Поиск"
        className="search-input__field"
      />
      <button
        onClick={handleSearch}
        className="search-input__button"
        aria-label="Search"
      >
        <img src={searchIcon} alt="search" className="search-input__icon" />
      </button>
    </div>
  );
};

export default SearchInput;
