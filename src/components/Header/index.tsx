import { useState } from "react";
import styles from "./Header.module.scss";
import Search from "./Search";

const Header = () => {
  const [search, setSearch] = useState("");

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
          <Search search={search} setSearch={setSearch} />
        </div>
      </div>

      <div className={styles.header__login}>
        <button className={styles.subscribe}>Inscreva-se</button>
        <button className={styles.login}>Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
