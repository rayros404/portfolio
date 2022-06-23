import styles from "../../styles/Navbar/NavbarLink.module.css"
import Link from "next/link"
const NavbarLink = (props) => {
  return (
    <Link 
      href={props.href}
      // target="_blank"
      // rel="noreferrer"
    >
      <a className={styles.link}>
        {props.name}
      </a>
    </Link>
  )
}

export default NavbarLink