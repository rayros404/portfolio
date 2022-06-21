import Navbar from "../components/Navbar/Navbar"
import styles from "../styles/Home.module.css"
import Image from "next/image"

const Home = () => {
  return (
    <div id={styles.home}>
      <section id={styles.internship}>
      <span id={styles.internshipTitle}>Internship</span>
      <span id={styles.internshipSubtitle}>BruinShack</span>
        <div id={styles.internshipContent}>
          <div id={styles.internshipText}>
            <div id={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in recusandae repudiandae tempore necessitatibus, vel sapiente illum dolorum officia atque!
              <br/>
              <br/>
              Technologies - HTML | SCSS | JavaScript | React | NextJS | Node | Express | Git
            </div>
            <a
              id={styles.bruinshackLink}
              href="https://bruinshack-my-contribution.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
            Show Me
            </a>
          </div>
          <div id={styles.internshipImage}>
            <Image 
              src="/BruinShackScreenshots/homescreen.jpg"
              height={450}
              width={450}
              alt="internshipHomepage"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home