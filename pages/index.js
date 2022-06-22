import styles from "../styles/Home.module.css"
import ProjectCard from "../components/ProjectCard"
import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <div id={styles.home}>
      <section id={styles.about}>
        <div id={styles.aboutContent}>
          <div id={styles.name}>
            Ray Ros
          </div>
          <div id={styles.job}>
            Frontend Developer
          </div>
          <div id={styles.contentBtns}>
          <Link
            href="/"
          >
            <a
              id={styles.work}
            >
              View My Work
            </a>
          </Link>
          <a 
            id={styles.resume}
            href="/resume.pdf"
            download
          >
            Resume
          </a>
          </div>
          
        </div>
        <div id={styles.aboutHeadshot}>
          <Image 
            src="/portfolioprofile.png"
            height={256}
            width={215}
            layout="fill"
            objectFit="contain"
            alt="profile"
          />
        </div>
      </section>
      <section id={styles.internship}>
      <span id={styles.internshipTitle} className={styles.sectionTitle}>Internship</span>
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
      <section id={styles.projects}>
        <div id={styles.projectsTitle} className={styles.sectionTitle}>Projects</div>
        <div id={styles.projectsContent}>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>

      </section>
    </div>
  )
}

export default Home