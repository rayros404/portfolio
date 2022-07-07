import styles from "../../styles/Home/FeaturedProject.module.css"
import Image from "next/image"
import PrimaryButton from "./PrimaryButton"

const FeaturedProject = (props) => {
  return (
    <div className={styles.featuredProject}>
      <div className={styles.title}>FEATURED:</div>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.top}>
        <div className={styles.text}>
          <span className={styles.subtitle}>About:</span>
          {props.about}
          <br/>
          <br/>
          <span className={styles.subtitle}>Features:</span>
           {props.features}
        </div>
        <div className={styles.screenshot}>
          <Image 
            src={props.imgSrc}
            layout="fill"
            objectFit="contain"
            alt={props.imgAlt}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`${styles.technologies} ${styles.text}`}>{props.technologies}</div>
        <PrimaryButton 
          name={props.linkName}
          href={props.linkRoute}
        />
      </div>
    </div>
  )
}

export default FeaturedProject