import styles from "../../styles/Home/Hero.module.css"
import Link from "next/link"
import Image from "next/image"
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"

const Hero = () => {
  return (
    <section id={styles.hero}>
      <div id={styles.heroContent}>
        <div id={styles.name}>
          Ray Ros
        </div>
        <div id={styles.job}>
          Frontend Developer
        </div>
        <div id={styles.contentBtns}>
          <PrimaryButton
            name="View My Work"
            href="/#internship"
          />
          <SecondaryButton 
            download={true}
            name="Resume"
            href="/Home/resume.pdf"
          />
        </div>
      </div>
      <div id={styles.heroHeadshot}>
        <Image 
          src="/Home/portfolioprofile.png"
          layout="fill"
          objectFit="contain"
          alt="profile"
          priority
        />
      </div>
    </section>
  )
}

export default Hero