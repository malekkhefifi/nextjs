// pages/about.js
import Navbar from './navbar'
import Footer from './footer'
import styles from './Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <h1>À propos de moi</h1>
        <p>Je suis développeuse web Full Stack, passionnée par les technologies front-end et back-end. J'ai suivi une formation chez Gomycode et j'aime créer des applications web performantes et esthétiques.</p>
      </main>
      <Footer />
    </div>
  )
}

