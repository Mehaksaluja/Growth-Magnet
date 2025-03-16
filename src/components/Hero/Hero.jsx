import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>We Are the Digital Architects of Your Brand's Success!</h1>
        <p>
          Unlock the power of digital influence with our expert strategies. From
          eye-catching content to result-driven campaigns, we make your brand
          shine online! 🚀
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Hero;
