import styles from "../styles/Home/Home.module.css"
import ProjectCard from "../components/Home/ProjectCard"
import Image from "next/image"
import Link from "next/link"
import ContactLink from "../components/Home/ContactLink"

const Home = () => {
  return (
    <div id={styles.home}>
      <section id={styles.hero}>
        <div id={styles.heroContent}>
          <div id={styles.name}>
            Ray Ros
          </div>
          <div id={styles.job}>
            Frontend Developer
          </div>
          <div id={styles.contentBtns}>
          <Link href="/">
            <a id={styles.work}>
              View My Work
            </a>
          </Link>
          <a 
            id={styles.resume}
            href="/Home/resume.pdf"
            download
          >
            Resume
          </a>
          </div>
          
        </div>
        <div id={styles.heroHeadshot}>
          <Image 
            src="/Home/portfolioprofile.png"
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
        <div 
          id={styles.internshipContent}
          className={styles.sectionContent}  
        >
          <div id={styles.internshipText}>
            <div className={styles.sectionText}>
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
        <div 
          id={styles.projectsContent}
          className={styles.sectionContent}  
        >
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </section>
      <section id={styles.contact}>
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
        
        
      </section>
    </div>
  )
}

export default Home