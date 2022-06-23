import { useState } from "react"
import styles from "../../styles/Navbar/Navbar.module.css"
import Menu from "./Menu"
import NavbarLink from "./NavbarLink"
import Link from "next/link"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleShowMenu = () => {
    setShowMenu(prevMenu => !prevMenu)
  }

  return (
      <nav id={styles.navbar}>
        <Link href="/">
          <a id={styles.homeBtn}>
            RR
          </a>
        </Link>
        <Menu 
          onClick={toggleShowMenu}
        />
        <div 
          id={styles.linkList}
          className={showMenu ? styles.show : styles.noShow}
        >
          <NavbarLink
            href="/#internship"
            name="Internship"
          />
          <NavbarLink
            href="/#projects"
            name="Projects"
          />
          <NavbarLink
            href="/#contact"
            name="Contact"
          />
        </div>
      </nav>    
  )
}

export default Navbar