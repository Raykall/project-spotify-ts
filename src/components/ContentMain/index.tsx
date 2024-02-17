import styles from "./ContentMain.module.scss";
import ItemArtist from "./ContentArtist";
import ContentItens from "./ContentItens";

const ContentMain = () => {
  return (
    <div className={styles.playlist__container}>
      <div id="result-playlists">
        <div className={styles.playlist}>
          <h2 className={styles.session}>Navegar por todas as seções</h2>
        </div>
        <div className={styles.scroll__container}>
          <div className={styles.scroll__container__list}>
            <section className={styles.offer__list}>
              <ContentItens />
            </section>
          </div>
          <ItemArtist />
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
