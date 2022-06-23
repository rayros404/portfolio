import styles from "../../styles/Home/Home.module.css"
import projectsStyles from "../../styles/Home/Projects.module.css"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <section 
      id="projects" 
      className={styles.section}
    >
    <div 
      id={projectsStyles.projectsTitle} 
      className={styles.sectionTitle}
    >
      Projects  
    </div>
      <div 
        id={projectsStyles.projectsContent}
        className={styles.sectionContent}  
      >
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </section> 
  )
}

export default Projects