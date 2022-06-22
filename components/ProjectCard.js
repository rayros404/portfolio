import styles from "../styles/ProjectCard.module.css"
import image from "../public/projectplaceholder.png"
import Link from "next/link"

const ProjectCard = () => {
  return (
    <Link href="/">
    <div 
      className={styles.projectCard}
      style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("/projectplaceholder.png")`}}
    >

      Color Picker
    </div>
    </Link>
  )
}

export default ProjectCard  