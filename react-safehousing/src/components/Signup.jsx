import PropTypes from "prop-types";
import "./Signup.css";

const Signup = ({ className = "" }) => {
  return (
    <button className={`signup1 ${className}`}>
      <div className="div16">註冊</div>
    </button>
  );
};

Signup.propTypes = {
  className: PropTypes.string,
};

export default Signup;
