import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const name = 'Austin Kibler'
const links = [
  { href: '/', text: 'Home' },
  { href: '/about-me', text: 'About Me' },
  { href: '#', text: 'Resume' },
]

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          {links.map(item => {
            return (
              <Link href={item.href} key={item.text}>
                <a className={styles.navItem}>{item.text}</a>
              </Link>
            )
          })}
        </nav>
        <span className={styles.logo}>Austin Kibler.dev</span>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
