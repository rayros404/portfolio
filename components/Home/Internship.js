import internshipStyles from "../../styles/Home/Internship.module.css"
import styles from "../../styles/Home/Home.module.css"
import PrimaryButton from "./PrimaryButton"
import Image from "next/image"
import SecondaryButton from "./SecondaryButton"

const Internship = () => {
  return (
    <section id="internship" className={styles.section}>
      <span 
        id={internshipStyles.internshipTitle} 
        className={styles.sectionTitle}
      >Internship</span>
      <span className={styles.sectionSubtitle}>BruinShack</span>
        <div 
          id={internshipStyles.internshipContent}
          className={styles.sectionContent}  
        >
          <div id={internshipStyles.top}>
            <div id={internshipStyles.internshipText}>
              <p className={styles.sectionText}>
                BruinShack is an online resource that helps UCLA students find and review off-campus housing. My role as a frontend developer was to coordinate with the UI/UX design and Web Dev teams to transition design mockups into interactive and responsive web pages.
              </p>
            </div>
            <div id={internshipStyles.internshipImage}>
              <Image 
                src="/BruinShackScreenshots/homescreen.jpg"
                layout="fill"
                objectFit="contain"
                alt="internshipHomepage"
              />
            </div>
          </div>
          <div id={internshipStyles.bottom}>
            <div 
              id={internshipStyles.technologies} 
              className={styles.sectionText}
            >
              HTML | SCSS | JavaScript | React | NextJS | Node | Git
            </div>
            <div className={internshipStyles.btns}>
              <PrimaryButton 
                href="https://bruinshack-my-contribution.vercel.app/"
                target="_blank"
                rel="noreferrer"
                name="My Contributions"
              />
              <SecondaryButton 
                href="https://www.bruinshack.com/"
                target="_blank"
                rel="noreferrer"
                name="BruinShack"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Internship