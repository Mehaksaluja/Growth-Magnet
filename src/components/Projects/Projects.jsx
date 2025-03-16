import "./Projects.css";
import caseStudy1 from "../../assets/case-study-1.webp";
import caseStudy2 from "../../assets/case-study-2.webp";
import caseStudy3 from "../../assets/case-study-3.webp";
import caseStudy4 from "../../assets/case-study-4.webp";

const projectData = [
  {
    id: 1,
    image: caseStudy1,
    title: "Linkedin Marketing",
    description: "Increased engagement by 250% in 3 months.",
    link: "#",
  },
  {
    id: 2,
    image: caseStudy2,
    title: "Instagram Growth",
    description: "Generated 10x ROI through targeted Instagram ads.",
    link: "#",
  },
  {
    id: 3,
    image: caseStudy3,
    title: "Content Creation",
    description: "Created 100+ Engaging contents in last month.",
    link: "#",
  },
  {
    id: 4,
    image: caseStudy4,
    title: "Website Development",
    description: "Created Websites for 50+ clients in last 3 months.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="projects-card">
            <img src={project.image} alt={project.title} />
            <div className="projects-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="case-study-btn">
                View Projects
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
