import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__text}>
        <p className={styles.footer__title}>Testar o Premium de graça</p>
        <p className={styles.footer__subtitle}>
        Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.
        </p>
      </div>
      <div className={styles.button}>
        <button type="button">Inscreva-se grátis</button>
      </div>
    </footer>
  );
};

export default Footer;
