import styles from "../../styles/Home/ProjectCard.module.css"
import Link from "next/link"

const ProjectCard = (props) => {
  return (
    <Link href={props.href}>
    <div 
      className={styles.projectCard}
      style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${props.image})`}}
    >
      <div id={styles.projectName}>
        {props.name}
      </div>
    </div>
    </Link>
  )
}

export default ProjectCard  