const IconButton = ({ text, onClick, svgIcon, className = "" }) => {
  return (
    <button onClick={onClick} className={`custom-button ${className}`}>
      {svgIcon && <>{svgIcon}</>}
      {text && <span className="custom-button__text">{text}</span>}
    </button>
  );
};

export default IconButton;
