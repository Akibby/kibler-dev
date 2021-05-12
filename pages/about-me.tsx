import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title>kibler.dev - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.body}>
        <h1 className={styles.title}>About Me</h1>
      </main>
    </div>
  )
}
