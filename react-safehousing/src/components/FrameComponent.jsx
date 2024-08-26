import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`section4 ${className}`}>
      <div className="caption">
        <div className="caption1">
          <div className="div51">
            <p className="p28">政府公開資料是給公眾的</p>
            <p className="p28">安家百科幫您做個別化的專業分析</p>
          </div>
          <div className="m">
            <p className="p30">安家百科的淹水深度模擬解析度</p>
            <p className="p28">
              <span className="span22">{`為公開資料的 `}</span>
              <span className="span23">1600</span>
              <span className="span24"> 倍</span>
            </p>
          </div>
        </div>
        <div className="img">
          <div className="img1">
            <img className="icon" alt="" src="/-20240709-111112-2@2x.png" />
            <div className="m">
              <span className="span25">{`公開資料解析度 `}</span>
              <span className="m1">40*40 m</span>
            </div>
          </div>
          <div className="img1">
            <img className="icon1" alt="" src="/-20240709-111112-3@2x.png" />
            <div className="m">
              <span className="span25">{`安家百科解析度 `}</span>
              <span className="m1">1*1 m</span>
            </div>
          </div>
        </div>
      </div>
      <div className="fig2">
        <div className="line" />
        <div className="line1" />
        <div className="div53">地震</div>
        <div className="div54">淹水</div>
        <div className="div55">政府公開資料</div>
        <div className="div56">安家百科的個別化專業分析</div>
        <div className="div57">災害規模</div>
        <div className="div58">
          <p className="p28">
            <span className="span27">{`芮氏規模 `}</span>
            <span className="m1">4.5:</span>
            <span className="span25"> 地震釋放的能量</span>
          </p>
          <p className="p28">
            <span className="span25">{`震度 `}</span>
            <span className="m1">3</span>
            <span className="span27">: 地表加速度</span>
          </p>
        </div>
        <div className="mm6hr">
          <span className="span25">{`降雨 `}</span>
          <span className="m1">350mm/6hr</span>
        </div>
        <div className="div59">災害衝擊</div>
        <div className="div60">
          <p className="p28">不同震度對不同材質建物</p>
          <p className="p28">造成的損壞程度</p>
        </div>
        <div className="div61">淹水深度模擬</div>
        <div className="div62">成本</div>
        <div className="div63">房屋價值或建築成本</div>
        <div className="div64">汽機車、家具成本</div>
        <div className="div65">發生機率</div>
        <div className="div66">地震危害度分析</div>
        <div className="div67">淹水深度機率曲線</div>
        <div className="div68">期望損失</div>
        <div className="div69">每年平均損失</div>
        <div className="div70">每年平均損失</div>
        <div className="line2" />
        <div className="line3" />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
