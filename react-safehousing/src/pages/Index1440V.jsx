import Section1Search from "../components/Section1Search";
import Section from "../components/Section";
import Section1 from "../components/Section1";
import FrameComponent from "../components/FrameComponent";
import Section2Shoecase from "../components/Section2Shoecase";
import Footer from "../components/Footer";
import "./Index1440V.css";

const Index1440V = () => {
  return (
    <div className="index-1440-v2">
      <Section1Search />
      <Section />
      <img className="img-icon" alt="" src="/img@2x.png" />
      <Section1 />
      <FrameComponent />
      <Section2Shoecase />
      <Footer />
    </div>
  );
};

export default Index1440V;
