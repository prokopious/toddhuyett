import Layout from "@components/Layout"
import PostList from "@components/PostList"
import styles from "./index.module.css"
import projects from '../projects.json'

const Index = () => {
  return (
    <div>
      <div id={styles.box}>
        <div id={styles.cont}>
          <Layout>
            <div className={styles.nameBox}>
              <h1 className={styles.title}>Todd Huyett</h1>
              <h2 className={styles.hhh}>QA Automation Engineer</h2>
              <div className={styles.email}>toddhuyett@gmail.com</div>
              <p id={styles.ab}>
                Each of the portfolio items listed below—where
                applicable—contains a link to a simple frontend to demonstrate
                the implementation of the various technologies noted in its
                description. Each listing, unless it's a closed-source project, also contains a GitHub repository
                link. The JavaScript projects are from my early days of programming. The Selenium projects and bots are newer.
              </p>
            </div>
            <main>
              <PostList posts={projects} />
            </main>
          </Layout>
        </div>
      </div>
    </div>
  )
}

export default Index

