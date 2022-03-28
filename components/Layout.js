import Head from "next/head"
import Header from "./Header"
import styles from './Layout.module.css'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <section className="layout">
        <Header />
        <div className={styles.content}>{children}</div>
      </section>
    </>
  )
}
