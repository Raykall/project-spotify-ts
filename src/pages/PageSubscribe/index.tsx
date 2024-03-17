import Subscribe from "components/Subscribe";
import styles from "./PageSubscribe.module.scss";
import Option from "components/Option";

const PageSubscribe = () => {
  return (
    <section className={styles.subscribe}>
      <div className={styles.container__subscribe}>
        <header className={styles.header__subscribe}>
          <h1>Se inscreva e comece a curtir</h1>
        </header>
        <Subscribe />
        <Option />
      </div>
    </section>
  );
};

export default PageSubscribe;
