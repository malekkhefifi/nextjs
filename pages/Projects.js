// components/Projects.js
// components/Projects.js
import Footer from "./footer";
import Navbar from "./navbar"; // Importation du composant Navbar
import ProjectCard from "./projectcards"; // Importation du composant ProjectCard
import styles from './Projects.module.css'; // Importation du CSS module pour la page des projets

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This project is focused on building a user-friendly web application using modern technologies.',
      image: 'https://via.placeholder.com/320x180?text=Project+1', // Placeholder image
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This project highlights the use of API integration and dynamic content rendering.',
      image: 'https://via.placeholder.com/320x180?text=Project+2',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'An exciting project focusing on responsive design and cross-platform compatibility.',
      image: 'https://via.placeholder.com/320x180?text=Project+3',
    },
  ];

  return (
    <div className={styles.projectsContainer}>
      <Navbar />
      <h1 className={styles.projectsTitle}>My Projects</h1>

      <div className={styles.projectsList}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
