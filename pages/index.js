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
              <h2 className={styles.hhh}>Web Developer</h2>
              <p id={styles.ab}>
                Each of the portfolio items listed below—where
                applicable—contains a link to a simple frontend to demonstrate
                the implementation of the various technologies noted in its
                description. Each listing also contains a GitHub repository
                link.
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

