import styles from "../../styles/Home/Home.module.css"
import contactStyles from "../../styles/Home/Contact.module.css"
import ContactLink from "./ContactLink"

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.sectionTitle}>
        Get in Touch
      </div>
      <div
        id={contactStyles.contactContent} 
        className={styles.sectionContent}
      >
        <div id={contactStyles.sectionText} className={styles.sectionText}>
          Like what you see? Feel free to email me or connect with me on LinkedIn!
        </div>
        <div id={contactStyles.links}>
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
  )
}

export default Contact