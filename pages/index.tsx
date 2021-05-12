import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>kibler.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className={styles.body}>
          <h1 className={styles.title}>Site Under Construction</h1>
          <p className={styles.bodyP}>
            This site is still under construction but feel free to check out my
            <a href="https://github.com/Akibby">Github</a> to see some of my
            work.
          </p>
        </section>
      </Layout>
    </div>
  )
}
