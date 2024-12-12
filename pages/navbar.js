// components/Navbar.js
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/about">À propos</Link></li>
        <li><Link href="/Projects">Projets</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

