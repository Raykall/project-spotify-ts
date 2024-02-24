import styles from "./Option.module.scss";
import { ReactComponent as Google } from "assets/icon-google.svg";
import { ReactComponent as Facebook } from "assets/icon-facebook.svg";
import { ReactComponent as Apple } from "assets/icon-apple.svg";

const Option = () => {
  return (
    <div className={styles.option__sub}>
      <div className={styles.option__span}>
        <span>ou</span>
      </div>
      <div className={styles.option__social}>
        <a className={styles.option__rede__google}>
          <span className={styles.option__icon}>
            <Google />
          </span>
          Inscrever-se com o Google
        </a>
        <a className={styles.option__rede__facebook}>
          <span className={styles.option__icon}>
            <Facebook />
          </span>
          Inscrever-se com o Facebook
        </a>
        <a className={styles.option__rede__apple}>
          <span className={styles.option__icon}>
            <Apple />
          </span>
          Criar conta com a Apple
        </a>
      </div>
      <div className={styles.option__space}></div>
      <p className={styles.option__paragraph}>
        <span>
          <label>Já tem uma conta?</label>
          <a href="" className={styles["option__link-a"]}>Faça login aqui</a>
        </span>
      </p>
    </div>
  );
};

export default Option;
