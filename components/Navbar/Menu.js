import styles from "../../styles/Navbar/Menu.module.css"
const Menu = (props) => {
  return (
    <div 
      id={styles.menu}
      onClick={props.onClick}  
    >
      <span id={styles.topLine}></span>
      <span id={styles.bottomLine}></span>
    </div>
  )
}

export default Menu