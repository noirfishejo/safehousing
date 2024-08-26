import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <div className={`section2 ${className}`}>
      <img className="section2-icon" alt="" src="/section2@2x.png" />
      <div className="content">
        <div className="div17">
          <p className="p17">您知道天災造成您</p>
          <p className="p17">每年多少資產損失嗎？</p>
        </div>
        <div className="div18">
          <p className="p17">台灣易受地震和氣候變遷等災害衝擊</p>
          <p className="p17">政府的工程與法規已大大減天災造成的少損失</p>
          <p className="p17">但仍需要針對個人資產進行保護</p>
        </div>
        <div className="div17">
          <p className="p17">不知道預期損失多少</p>
          <p className="p17">保險費讓人隨便開價？</p>
        </div>
        <div className="div20">
          <p className="p17">
            <span className="span">{`2023 `}</span>
            <span className="span1">年美國房屋保險費平均上漲</span>
            <span className="span"> 21%</span>
          </p>
          <p className="p25">氣候變遷、物價造成保險費逐年上升</p>
          <p className="p25">
            知道天災的位置、規模大小、機率，才有辦法避險與轉移風險
          </p>
          <p className="p25">量化災害損失，才有辦法聰明地購買保險</p>
        </div>
      </div>
      <div className="fig">
        <div className="fig1">
          <div className="parent">
            <div className="div21">過去</div>
            <div className="frame">
              <div className="frame-child" />
              <div className="div22">天然災害造成的損失</div>
            </div>
          </div>
          <div className="frame-parent">
            <div className="group-child" />
            <div className="div23">剩餘的災害損失？</div>
            <div className="group-item" />
            <div className="div24">政府法規、工程措施</div>
            <div className="div25">現況</div>
          </div>
        </div>
        <div className="circle">
          <div className="circle1" />
          <div className="circle2" />
          <div className="div26">保險</div>
          <div className="div27">個人、社區工程措施</div>
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
