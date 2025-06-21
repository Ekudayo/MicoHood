import techMan from "../../assets/techMan.jpg";
import styles from "../hero/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroLeft}>
        <h1 className={styles.heroHeader}>MicoHood</h1>
        <p className={styles.heroText}>
          MicoHood Overview: MicoHood Tech is a forward-thinking technology
          company specializing in innovative software and hardware solutions.
          Known for its focus on cutting-edge developments, MicoHood aims to
          enhance user experience through creative design and advanced
          technology. The company’s portfolio includes applications, IoT
          devices, and tech services designed to improve connectivity,
          efficiency, and everyday life. Would you like a more detailed
          description or information about their specific products and services?
          kindly click on the button below.
        </p>
        <div>
          <button className={styles.joinbutton}>Join Now</button>
        </div>
      </div>
      <div className={styles.rightHero}>
        <img className={styles.img} src={techMan} alt="Tech Man working" />
      </div>
    </section>
  );
};

export default Hero;
