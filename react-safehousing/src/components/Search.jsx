import PropTypes from "prop-types";
import "./Search.css";

const Search = ({ className = "" }) => {
  return (
    <div className={`search2 ${className}`}>
      <img
        className="iconmonstr-magnifier-6-11"
        alt=""
        src="/iconmonstrmagnifier6-1.svg"
      />
      <div className="search3">
        <input className="input" name="search" type="text" />
      </div>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;
