import styles from "../../styles/Home/FeaturedProject.module.css"
import Image from "next/image"
import PrimaryButton from "./PrimaryButton"

const FeaturedProject = () => {
  return (
    <div className={styles.featuredProject}>
      <div className={styles.title}>FEATURED:</div>
      <div className={styles.name}>POKéDEX Tag & Search</div>
      <div className={styles.top}>
        <div className={styles.text}>
          <span className={styles.subtitle}>About:</span>
          Look up your favorite POKéMON! Add tags for easier search. Click on the POKéMON cards to see more details about them.
          <br/>
          <br/>
          <span className={styles.subtitle}>Features:</span>
           Fetch API | Dynamic Routing | Progressive Rendering | Filter & Search
        </div>
        <div className={styles.screenshot}>
          <Image 
            src="/ProjectScreenshots/pokedexScreenshot3.jpg"
            layout="fill"
            objectFit="contain"
            alt="internshipHomepage"
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`${styles.technologies} ${styles.text}`}>HTML | CSS | JavaScript | React | NextJS</div>
        <PrimaryButton 
          name="POKéDEX"
          href="/pokedex"
        />
      </div>
    </div>
  )
}

export default FeaturedProject