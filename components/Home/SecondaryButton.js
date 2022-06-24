import styles from "../../styles/Home/SecondaryButton.module.css"
const SecondaryButton = (props) => {
  return (
    <a 
      className={styles.secondaryBtn}
      href={props.href}
      target={props.target}  
      rel={props.rel}
      download={props.download}
      onClick={props.handleClick}
    >
      {props.name}
    </a>
  )
}

export default SecondaryButton