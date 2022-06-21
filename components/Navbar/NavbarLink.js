import styles from "../../styles/Navbar/NavbarLink.module.css"
const NavbarLink = (props) => {
  return (
    <a 
      className={styles.link}
      href={props.href}
      // target="_blank"
      // rel="noreferrer"
    >
      {props.name}
    </a>
  )
}

export default NavbarLink