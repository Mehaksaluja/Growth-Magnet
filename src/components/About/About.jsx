import "./About.css";
import about_img from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Empowering Brands, Elevating Digital Experiences</h2>
        <p>
          At Growth Magnet, we specialize in digital marketing, content
          creation, and web development, helping brands establish a strong
          online presence. Our team combines creativity, strategy, and
          technology to deliver impactful solutions that drive growth. Whether
          it's crafting compelling content, building innovative web
          applications, or executing data-driven marketing campaigns, we ensure
          every project is tailored to meet unique business needs. With a
          passion for excellence and a commitment to results, we help brands
          stand out in the ever-evolving digital landscape.
        </p>
      </div>
    </div>
  );
};
export default About;
