import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import menu_icon from "../../assets/menu-icon.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`} id="navbar">
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth="true" offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="services" smooth="true" offset={-260} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" smooth="true" offset={-150} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth="true" offset={-260} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth="true" offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className="btn"
            to="contact"
            smooth="true"
            offset={-260}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
}
export default Navbar;
