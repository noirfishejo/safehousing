import Search from "./Search";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import "./Section1Search.css";

const Section1Search = ({ className = "" }) => {
  return (
    <div className={`section-1-search ${className}`}>
      <div className="search4">
        <div className="title-btn">
          <div className="search5">
            <b className="b">
              <p className="p15">安家置產時</p>
              <p className="p15">如何找到安居的所在?</p>
            </b>
            <Search />
          </div>
          <div className="login-signup">
            <Login />
            <Signup />
            <div className="forgetpasswords">忘記密碼</div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

Section1Search.propTypes = {
  className: PropTypes.string,
};

export default Section1Search;
