import styles from "./Header.module.scss";
import Search from "./Search";
import Category from "./Category";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.navigation}>
        <button className={styles["arrow-left"]}>
          <img src="assets/icons/small-left.png" alt="" />
        </button>
        <button className={styles["arrow-right"]}>
          <img src="assets/icons/small-right.png" alt="smallRight" />
        </button>

        <div className={styles.header__main}>
          <Search />
        </div>
        <div className={styles.header__categories}>
          <Category />
        </div>
      </div>

      <div className={styles.header__login}>
        <button className={styles.subscribe}>
          <Link to={"/subscribe"} className={styles.subscribe__link}>Inscreva-se</Link>
        </button>
        <button className={styles.login}>Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
