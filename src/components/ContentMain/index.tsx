import styles from "./ContentMain.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ItemContent from "./ItemContent";


const ContentMain = () => {
  return (
    <div className={styles.playlist__container}>
      <div id="result-playlists">
        <div className={styles.playlist}>
          <h1 className={styles.greeting}>Boas vindas</h1>
          <h2 className={styles.session}>Navegar por todas as seções</h2>
        </div>
        <div className={styles.scroll__container}>
          <div>
            <section className={styles.offer__list}>
              <ItemContent />
            </section>
          </div>
        </div>
      </div>

      <div id="result-artist" className={styles.hidden}>
        <div className={styles.grid__container}>
          <div className={styles.artist__card}>
            <div className={styles.card__img}>
              <img
                className={styles.artist__img}
                alt="imagem do artista"
                src="assets/icons/logo-spotify.png"
              />
              <div className={styles.play}>
                <span className={styles.fa__play}>
                  <FontAwesomeIcon icon={faPlay} />
                </span>
              </div>
            </div>
            <div className={styles.card__text}>
              <a title="Foo Fighters" className={styles.vst} href="/#">
                <span className={styles.artist__name} id="artist-name"></span>
                <span className={styles.artist__categorie}>Artista</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
