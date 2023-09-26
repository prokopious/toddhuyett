import Link from "next/link"
import { AiOutlineGithub } from "react-icons/ai"
import styles from "./PostList.module.css"

export default function PostList({ posts }) {
  if (posts === "undefined") return null

  return (

    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        <div
          // id={posts.indexOf(post) === 0 && styles.first}
          className={styles.card}
        >
          <div>
            <div className="boxa">
              <Link href={{ pathname: `https://www.youtube.com/watch?v=jwBaNs7CO2I&t=184s` }} target="_blank">
                <a>Automation tutorial on YouTube.</a>
              </Link>
            </div>
            <div className="boxb">Here I explain headless Windows desktop automation.</div>
          </div>
          <div className="boxc">
            {/* <Link href={{ pathname: `${post.repo}` }}>
                      <a>
                        <AiOutlineGithub />
                      </a>
                    </Link> */}
          </div>
        </div>


        {posts &&
          posts.map(post => {
            return (
              <> <div
                id={posts.indexOf(post) === 0 && styles.first}
                className={styles.card}
              >
                <div>
                  <div className="boxa">
                    <Link href={{ pathname: `${post.url}` }} target="_blank">
                      <a>{post.title}</a>
                    </Link>
                  </div>
                  <div className="boxb">{post.description}</div>
                </div>
                <div className="boxc">
                  <Link href={{ pathname: `${post.repo}` }}>
                    <a>
                      <AiOutlineGithub />
                    </a>
                  </Link>
                </div>
              </div>

              </>
            )
          })}
      </ul>
    </div>
  )
}
