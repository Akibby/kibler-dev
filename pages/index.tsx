import Head from 'next/head'
import Link from "next/link";
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
          <h1 className={styles.title}>
            Hey there
          </h1>
          <p className={styles.bodyP}>My name is Austin Kibler. I am a recent Computer Science graduate from McNeese State University. I picked up programming in 2013 by taking a few Python courses on Codecademy. Since then I have worked with many different languages like Java, Scheme, Swift, and JavaScript. </p>
        </section>
      </Layout>
    </div>
  )
}
