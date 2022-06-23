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
          <Link href="/#internship" passHref>
            <PrimaryButton
              name="View My Work"
            />
          </Link>
          <SecondaryButton 
            href="/Home/resume.pdf"
            download={true}
            name="Resume"
          />
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
  )
}

export default Hero