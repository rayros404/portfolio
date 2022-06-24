import styles from "../../styles/Home/PrimaryButton.module.css"
const PrimaryButton = (props) => {
  return (
    <a 
      className={styles.primaryBtn}
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

export default PrimaryButton