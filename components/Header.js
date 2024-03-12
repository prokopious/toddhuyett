import Link from "next/link"
import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
// import styles from "./Header.module.css"

export default function Header() {
  return (
    <>
      <header className="header">
        <nav
          className="nav"
          role="navigation"
          aria-label="main navigation"
        >
          <Link className="nava" id="git" href="https://github.com/prokopious">
          
              GitHub
         
          </Link>
          <Link className="nava" id="git" href="https://www.linkedin.com/in/todd-huyett-2596a892/">
         
              LinkedIn
       
          </Link>
        </nav>
      </header>
      <style jsx>{`
 .header {
  max-width: 960px;
  display: flex;
  justify-content: left;
  align-items: center;
}
.nav {
  max-width: 100%;
  font-size: calc(20px + 0.5vw);
  align-items: center;
}
#icon {
  padding-right: 20px;
}
.nava {
  margin-right: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}
#git:hover {
  color: blue;
}

    `}</style>
    </>
  )
}
