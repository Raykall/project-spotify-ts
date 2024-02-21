import Form from "components/Form";
import styles from "./Subscribe.module.scss";
import Option from "components/Option";

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <div className={styles.container__subscribe}>
        <header className={styles.header__subscribe}>
          <h1>Se inscreva e comece a curtir</h1>
        </header>
        <Form />
        <Option />
      </div>
    </section>
  );
};

export default Subscribe;
