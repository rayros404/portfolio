import styles from "../styles/Home/Home.module.css"
import ProjectCard from "../components/Home/ProjectCard"
import Image from "next/image"
import Link from "next/link"
import ContactLink from "../components/Home/ContactLink"
import Hero from "../components/Home/Hero"
import Internship from "../components/Home/Internship"
import Projects from "../components/Home/Projects"
import PrimaryButton from "../components/Home/PrimaryButton"


const Home = () => {
  return (
    <div id={styles.home}>
      <Hero />
      <Internship />
      <Projects />
      {/* <section id="contact" className={styles.section}>
        <div
          id={styles.contactTitle}
          className={styles.sectionTitle}
        >
          Get in Touch
        </div>
        <div
          id={styles.contactContent} 
          className={styles.sectionContent}
        >
          <div className={styles.sectionText}>
            Like what you see? Feel free to email me or connect with me on LinkedIn!
          </div>
          <div id={styles.links}>
            <ContactLink 
              src="/Home/email-icon.png"
              name="ros.rayy404@gmail.com"
              alt="email icon"
            />
            <ContactLink 
              href="https://www.linkedin.com/in/rayros/"
              src="/Home/linkedin-icon.png"
              name="LinkedIn"
              alt="linked icon"
            />
            <ContactLink 
              href="https://github.com/rayros404"
              src="/Home/github-icon.png"
              name="GitHub"
              alt="github icon"
            />
          </div>
        </div>
        
        
      </section> */}
    </div>
  )
}

export default Home