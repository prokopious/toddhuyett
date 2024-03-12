import Link from "next/link"
import { AiOutlineGithub } from "react-icons/ai"
// import styles from "./PostList.module.css"

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
                // id={posts.indexOf(post) === 0 && styles.first}
                // className={styles.card}
                className="card"
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
      <style jsx>{`
    .card {
      display: grid;
      grid-template-columns: 9fr 1fr;
      border-top: 1px solid rgba(255, 255, 255, 0.993);
      grid-gap: 5px;
      padding-left: 40px;
      padding-top: 15px;
      padding-bottom: 15px;
      margin-right: 0px;
      margin-bottom: 15px;
      border-bottom: 1px solid rgba(42, 42, 42, 0.158);
      background-color: rgba(255, 255, 255, 0.336);
      border-radius: 2px;
      padding-right: 0px;
    }
    @media only screen and (max-width: 960px) {
        .card {
          padding: 20px;
          padding-left: 15px;
          margin-left: 5px;
        }
        
      }
    `}</style>
    </div>
  )
}
