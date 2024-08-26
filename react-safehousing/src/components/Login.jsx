import PropTypes from "prop-types";
import "./Login.css";

const Login = ({ className = "" }) => {
  return (
    <button className={`login1 ${className}`}>
      <div className="div15">登入</div>
    </button>
  );
};

Login.propTypes = {
  className: PropTypes.string,
};

export default Login;
