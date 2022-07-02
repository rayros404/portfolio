import styles from "../../styles/Home/Home.module.css"
import projectsStyles from "../../styles/Home/Projects.module.css"
import ProjectCard from "./ProjectCard"
import HorizontalDivider from "./HorizontalDivider"
import FeaturedProject from "./FeaturedProject"

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
        <div id={projectsStyles.featured}>
          <FeaturedProject />
        </div>
        <HorizontalDivider />
        <div id={projectsStyles.regularProjects}>
          <ProjectCard 
            href="/colorFlipper"
            name="Color Flipper"
            image="/ProjectScreenshots/colorFlipperScreenshot.jpg"
          />
          <ProjectCard 
            href="/counter"
            name="Counter"
            image="/ProjectScreenshots/counterScreenshot.jpg"
          />
        </div>
      </div>
    </section> 
  )
}

export default Projects