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
          <FeaturedProject 
            name="POKéDEX Tag & Search"
            about="Look up your favorite POKéMON! Add tags for easier search. Click on the POKéMON cards to see more details about them."
            features="Fetch API | Dynamic Routing | Progressive Rendering | Filter & Search"
            imgSrc="/ProjectScreenshots/pokedexScreenshot3.jpg"
            imgAlt="pokedex screenshot"
            technologies="HTML | CSS | JavaScript | React | NextJS"
            linkName="POKéDEX"
            linkRoute="/pokedex"
          />
          <HorizontalDivider />
          <FeaturedProject 
            name="Sudoku Solver"
            about="Need help with your Sudoku puzzle? Look no further, this app will do it in a blink of an eye!"
            features="Data Structures & Algorithms | Depth-First Search | Backtracking"
            imgSrc="/ProjectScreenshots/sudokuSolverScreenshot.jpg"
            imgAlt="sudoku screenshot"
            technologies="HTML | CSS | JavaScript | React | NextJS"
            linkName="Sudoku Solver"
            linkRoute="/sudokuSolver"
          />
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