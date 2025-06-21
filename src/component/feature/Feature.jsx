import styles from "../feature/feature.module.css";

const Feature = () => {
  return (
    <section className={styles.features}>
      <h2>Key Features</h2>
      <div className={styles.featuresContainer}>
        <div className={styles.featureCard}>
          <span>
            <i className={`fa-solid fa-building`}></i>
          </span>
          <h3>Local Updates</h3>
          <p>Stay informed with the latest community news and events.</p>
        </div>
        <div className={styles.featureCard}>
          <span>
            <i className={`fa-solid fa-store `}></i>
          </span>
          <h3>Business Listings</h3>
          <p>Discover and support local businesses around you.</p>
        </div>
        <div className={styles.featureCard}>
          <span>
            <i className={`fa-solid fa-user-shield`}></i>
          </span>
          <h3>Safety Tips</h3>
          <p>Get important advice to stay safe and secure in your area.</p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
