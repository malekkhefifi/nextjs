import Footer from "./footer";
import Navbar from "./navbar"; // Assuming Navbar is located in the same folder
import styles from './Contact.module.css'; // Import the CSS module for styling

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}>Contactez-moi</h1> {/* Apply the formTitle class here */}
        <form className={styles.contactForm}>
          <input type="text" placeholder="Votre nom" className={styles.inputField} />
          <input type="email" placeholder="Votre email" className={styles.inputField} />
          <textarea placeholder="Votre message" className={styles.textareaField}></textarea>
          <button type="submit" className={styles.submitButton}>Envoyer</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
