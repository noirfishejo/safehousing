import PropTypes from "prop-types";
import "./Section1.css";

const Section1 = ({ className = "" }) => {
  return (
    <div className={`section3 ${className}`}>
      <div className="div28">未來，氣候變遷的災害會越來越嚴重</div>
      <div className="num">
        <div className="num-1">
          <div className="div29">經濟學人雜誌指出</div>
          <div className="num-11">
            <div className="num-12">
              <div className="div30">氣候變遷將造成屋主的損失</div>
              <div className="div31">
                <span>{`25 `}</span>
                <span className="span3">兆美元</span>
              </div>
            </div>
            <div className="num-13">
              <div className="div30">平均每個屋主損失</div>
              <div className="div31">
                <span>10,000</span>
                <span className="span3"> 美元</span>
              </div>
            </div>
            <div className="num-14">
              <div className="div30">平均每個屋主損失約等於</div>
              <div className="div31">
                <span>{`32 `}</span>
                <span className="span3">萬台幣</span>
              </div>
              <div className="div36">
                <span className="span6">*以全球</span>
                <span className="span7">80</span>
                <span className="span6">億人口，</span>
                <span className="span7">25</span>
                <span className="span6">億戶房屋計算</span>
              </div>
            </div>
          </div>
        </div>
        <div className="num-2">
          <div className="div37">
            <span className="txt">
              <span className="span11">2020</span>
              <span className="span12"> 全球十大洪水地震</span>
            </span>
          </div>
          <div className="num-21">
            <div className="num-12">
              <div className="div30">保險理賠達</div>
              <div className="div31">
                <span>{`306 `}</span>
                <span className="span3">億美元</span>
              </div>
            </div>
            <div className="num-13">
              <div className="div30">總災害損失</div>
              <div className="wrapper">
                <div className="div41">
                  <span>{`1,232 `}</span>
                  <span className="span3">億美元</span>
                </div>
              </div>
            </div>
            <div className="num-24">
              <div className="div30">未保險金額達</div>
              <div className="div31">
                <span>{`926 `}</span>
                <span className="span3">億美元</span>
              </div>
            </div>
          </div>
        </div>
        <div className="num-1">
          <div className="div29">內政部統計</div>
          <div className="num-11">
            <div className="num-12">
              <div className="div30">台灣平均每年因天災損失</div>
              <div className="div31">
                <span>{`350 `}</span>
                <span className="span3">億台幣</span>
              </div>
            </div>
            <div className="num-33">
              <div className="div47">
                <span>
                  <span>88%</span>
                  <span className="span17">{` `}</span>
                </span>
                <span className="span18">洪水損失</span>
              </div>
              <div className="div47">
                <span>
                  <span>8.45%</span>
                  <span className="span19">{` `}</span>
                </span>
                <span className="span18">地震損失</span>
              </div>
            </div>
            <div className="num-24">
              <div className="div30">平均每個屋主損失</div>
              <div className="div31">
                <span>{`3,500 `}</span>
                <span className="span3">台幣/年</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Section1.propTypes = {
  className: PropTypes.string,
};

export default Section1;
