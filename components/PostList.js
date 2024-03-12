import Link from "next/link"
import { AiOutlineGithub } from "react-icons/ai"
import styles from "./PostList.module.css"

export default function PostList({ posts }) {
  if (posts === "undefined") return null

  return (

    <div>
      {!posts && <div>No posts!</div>}
      <ul>



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
                   {post.title}
                    </Link>
                  </div>
                  <div className="boxb">{post.description}</div>
                </div>
                <div className="boxc">
                  <Link href={{ pathname: `${post.repo}` }}>
                 
                      <AiOutlineGithub />
              
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
