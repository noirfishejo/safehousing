import PropTypes from "prop-types";
import "./Logo.css";

const Logo = ({ className = "" }) => {
  return (
    <div className={`logo-white ${className}`}>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <img className="vector-icon2" alt="" src="/vector2.svg" />
      <img className="vector-icon3" alt="" src="/vector3.svg" />
      <img className="vector-icon4" alt="" src="/vector4.svg" />
      <img className="vector-icon5" alt="" src="/vector5.svg" />
      <img className="vector-icon6" alt="" src="/vector6.svg" />
      <img className="vector-icon7" alt="" src="/vector7.svg" />
      <img className="vector-icon8" alt="" src="/vector8.svg" />
      <img className="vector-icon9" alt="" src="/vector9.svg" />
      <img className="vector-icon10" alt="" src="/vector10.svg" />
      <img className="vector-icon11" alt="" src="/vector11.svg" />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
