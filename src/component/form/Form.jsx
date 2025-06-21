import styles from "../form/form.module.css";

const Form = () => {
  return (
    <div>
      <section className={styles.joinForm}>
        <h2>Join Our Community</h2>
        <p>Enter your name and email to stay connected!</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Join Now</button>
        </form>
      </section>
    </div>
  );
};

export default Form;
