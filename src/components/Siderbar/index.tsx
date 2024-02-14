import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faGlobe,
  faPlus,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.sidebar__navigation}>
        <div className={styles.logo}>
          <a href="/#">
            <img src="assets/icons/logo-spotify.png" alt="logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="/#">
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.library}>
        <div className={styles.library__content}>
          <button className={styles.library__button}>
            <span>
              <FontAwesomeIcon icon={faBook} />
            </span>
            <span>Sua biblioteca</span>
          </button>
          <span className={styles.fa__plus}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
        <section className={styles.section__playlist}>
          <div className={styles.playlist__content}>
            <span className={styles.text__title}>
              Crie sua primeira playlist
            </span>
            <span className={styles.text__subtitle}>
              É fácil, vamos te ajudar.
            </span>
            <button className={styles.playlist__button}>
              <span>Criar playlist</span>
            </button>
          </div>
        </section>
        <div className={styles.cookies}>
          <a href="/#">Cookies</a>
        </div>
        <div className={styles.languages}>
          <button className={styles.languages__button}>
            <span>
              <FontAwesomeIcon icon={faGlobe} />
            </span>
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
