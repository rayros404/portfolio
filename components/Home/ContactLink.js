import Image from "next/image"
import styles from "../../styles/Home/ContactLink.module.css"
const ContactLink = (props) => {
  return (
    <a 
      className={styles.link}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={props.src}
        height={30}
        width={30}
        alt={props.alt}
      />
      {props.name}
    </a>
  )
}

export default ContactLink