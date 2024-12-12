import Navbar from "./navbar";
import Footer from "./footer";
import styles from "./Home.module.css"; // Import du fichier CSS module

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Bienvenue sur mon Portfolio !</h1>
      <img
        src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/468596883_901841282095915_6075336009937870553_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ES3tyxNKf0IQ7kNvgHdtArH&_nc_zt=23&_nc_ht=scontent.ftun1-2.fna&_nc_gid=AB-AfVfOXIgZaED0gBHH38g&oh=00_AYB1NCV9vna5VJctqRJfxy5XlBwZvKPWLwmO-XPpfqdO6w&oe=67572555"
        alt="Photo de profil de Malek"
        className={styles.profileImage}
        width={200}
        height={200}
      />
      <Footer />
    </div>
  );
}



