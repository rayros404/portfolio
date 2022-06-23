import styles from "../../styles/Home/ProjectCard.module.css"
import Link from "next/link"

const ProjectCard = () => {
  return (
    <Link href="/">
    <div 
      className={styles.projectCard}
      style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("/Home/projectplaceholder.png")`}}
    >

      Color Picker
    </div>
    </Link>
  )
}

export default ProjectCard  