import Link from "next/link"
import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav
          className={styles.nav}
          role="navigation"
          aria-label="main navigation"
        >
          <Link className={styles.nava} id="git" href="https://github.com/prokopious">
          
              GitHub
         
          </Link>
          <Link className={styles.nava} id="git" href="https://www.linkedin.com/in/todd-huyett-2596a892/">
         
              LinkedIn
       
          </Link>
        </nav>
      </header>
    </>
  )
}
