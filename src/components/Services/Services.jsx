import "./Services.css";
import service1 from "../../assets/service-1.jpg";
import service2 from "../../assets/service-2.jpg";
import service3 from "../../assets/service-3.jpg";
import logo1 from "../../assets/service-logo-1.png";
import logo2 from "../../assets/service-logo-2.png";
import logo3 from "../../assets/service-logo-3.png";

const servicesData = [
  { image: service1, logo: logo1, title: "Social Media Marketing" },
  { image: service2, logo: logo2, title: "Content Creation" },
  { image: service3, logo: logo3, title: "Web Development" },
];

const Services = () => {
  return (
    <div className="services" id="services">
      {servicesData.map((service, index) => (
        <div className="service" key={index}>
          <img src={service.image} alt={service.title} />
          <div className="caption">
            <img src={service.logo} alt="Logo" />
            <p>{service.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
