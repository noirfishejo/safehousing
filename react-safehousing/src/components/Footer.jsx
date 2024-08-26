import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={`footer1 ${className}`}>
      <div className="footer-logo-group">
        <div className="footer-logo1">
          <img className="logo-white-icon3" alt="" src="/logowhite.svg" />
          <div className="div97">讓每個人都能住得安心</div>
        </div>
        <div className="sitemap3">
          <div className="div97">
            <p className="p36">關於我們</p>
            <p className="p36">聯絡我們</p>
          </div>
          <div className="div97">
            <p className="p36">商品介紹</p>
            <p className="p36">購買流程</p>
            <p className="p36">技術理論</p>
          </div>
          <div className="div97">
            <p className="p36">購買圖資</p>
            <p className="p36">購物車</p>
          </div>
          <div className="div97">
            <p className="p36">會員點數</p>
            <p className="p36">購買點數</p>
          </div>
          <div className="div97">
            <p className="p36">會員帳號</p>
            <p className="p36">我的報告</p>
            <p className="p36">帳號管理</p>
          </div>
          <div className="div97">
            <p className="p36">常見問題</p>
            <p className="p36">服務條款</p>
            <p className="p36">隱私政策</p>
          </div>
        </div>
        <div className="copyright1">
          <div className="copyright-2023-all1">
            © Copyright 2023. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
