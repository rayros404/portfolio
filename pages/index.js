import styles from "../styles/Home/Home.module.css"
import Hero from "../components/Home/Hero"
import Internship from "../components/Home/Internship"
import Projects from "../components/Home/Projects"
import Contact from "../components/Home/Contact"

const Home = () => {
  return (
    <div id={styles.home}>
      <Hero />
      <Internship />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home