import PropTypes from "prop-types";
import "./Section2Shoecase.css";

const Section2Shoecase = ({ className = "" }) => {
  return (
    <div className={`section5-shoecase ${className}`}>
      <div className="showcase-all">
        <div className="showcase-words">
          <div className="title">
            <div className="line4" />
            <div className="div71">情境展示</div>
            <div className="line4" />
          </div>
          <div className="mm6hr2">
            <span className="span34">{`左為公開資料 `}</span>
            <span className="mm6hr3">{`350mm/6hr `}</span>
            <span className="span34">降雨情境，右為本產品相同情境計算結果</span>
          </div>
        </div>
        <div className="showcase-btn">
          <div className="btn-location">
            <div className="button-t-1">
              <div className="div72">桃園市政府</div>
            </div>
            <div className="button-t-1">
              <div className="div72">桃園火車站</div>
            </div>
            <div className="button-t-3">
              <div className="div74">
                <span className="span36">{`台北 `}</span>
                <span className="span37">101</span>
              </div>
            </div>
            <div className="button-t-1">
              <div className="div72">台北大巨蛋</div>
            </div>
          </div>
          <div className="btn-filter">
            <div className="button-t-21">
              <div className="div76">衛星底圖</div>
            </div>
            <div className="button-t-21">
              <div className="div76">淹水房屋</div>
            </div>
            <div className="button-t-21">
              <div className="div76">淹水道路</div>
            </div>
            <div className="op">
              <div className="div79">房屋透明度</div>
              <img className="op-child" alt="" src="/group-4.svg" />
            </div>
          </div>
        </div>
        <div className="showcase">
          <img className="showcase-img-icon" alt="" src="/showcaseimg@2x.png" />
        </div>
        <div className="bar-flood-color-m">
          <div className="button-m">
            <div className="m4">
              <span className="span34">{`水深 `}</span>
              <span className="m5">(m)</span>
            </div>
          </div>
          <div className="div80">
            <div className="div81">
              <div className="m4">0.0 - 0.1</div>
            </div>
            <div className="child" />
          </div>
          <div className="div83">
            <div className="div81">
              <div className="m4">0.1 - 0.2</div>
            </div>
            <div className="item" />
          </div>
          <div className="div85">
            <div className="div81">
              <div className="m4">0.2 - 0.3</div>
            </div>
            <div className="inner" />
          </div>
          <div className="div85">
            <div className="div81">
              <div className="m4">0.3 - 0.4</div>
            </div>
            <div className="rectangle-div" />
          </div>
          <div className="div85">
            <div className="div81">
              <div className="m4">0.4 - 0.5</div>
            </div>
            <div className="child1" />
          </div>
          <div className="div94">
            <div className="div81">
              <div className="m4">{`> 0.5`}</div>
            </div>
            <div className="child2" />
          </div>
        </div>
      </div>
    </div>
  );
};

Section2Shoecase.propTypes = {
  className: PropTypes.string,
};

export default Section2Shoecase;
