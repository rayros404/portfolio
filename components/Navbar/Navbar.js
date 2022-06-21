import { useState } from "react"
import styles from "../../styles/Navbar/Navbar.module.css"
import Menu from "./Menu"
import NavbarLink from "./NavbarLink"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleShowMenu = () => {
    setShowMenu(prevMenu => !prevMenu)
  }

  return (
      <nav id={styles.navbar}>
        <a 
          id={styles.homeBtn}
          href="/"
        >
          Ray Ros
        </a>
        <Menu 
          onClick={toggleShowMenu}
        />
        <div 
          id={styles.linkList}
          className={showMenu ? styles.show : styles.noShow}
        >
          <NavbarLink
            href="/"
            name="Internship"
          />
          <NavbarLink
            href="/"
            name="Projects"
          />
          <NavbarLink
            href="/"
            name="About"
          />
          <NavbarLink
            href="/"
            name="Contact"
          />
        </div>
      </nav>    
  )
}

export default Navbar