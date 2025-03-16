import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Services" title="What We Offer" />
        <Services />
        <About />
        <Title subtitle="Projects" title="Our Previous Clients Projects" />
        <Projects />
        <Title subtitle="Testimonials" title="What Client Says" />
        <Testimonials />
        <Title subtitle="Contact Us" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
export default App;
