import Head from "next/head"
import Header from "./Header"
// import styles from './Layout.module.css'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <style jsx>{`
   .content {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    padding-bottom: 40px;
    padding-top: 0px;
    height: 100vw;
  }
    `}</style>
    </>
  )
}
