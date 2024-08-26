import Logo from "./Logo";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ className = "" }) => {
  return (
    <div className={`navbar1 ${className}`}>
      <Logo />
      <div className="sitemap2">
        <a className="a">我的報告</a>
        <a className="a">購買圖資</a>
        <a className="a">關於我們</a>
        <a className="a">商品介紹</a>
        <a className="a">會員點數</a>
      </div>
      <div className="user-cart-hamburger-button1">
        <a className="iconmonstr-shopping-cart-thin1">
          <img className="vector-icon12" alt="" src="/vector12.svg" />
        </a>
        <a className="iconmonstr-shopping-cart-thin1">
          <img className="vector-icon13" alt="" src="/vector13.svg" />
        </a>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
