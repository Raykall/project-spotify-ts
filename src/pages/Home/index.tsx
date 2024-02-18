import styles from "./Initiation.module.scss";
import ItemArtist from "components/ContentArtist";
import ContentItens from "components/ContentItens";
import Header from "components/Header";
import Sidebar from "components/Siderbar";
import { useApplication } from "state/hooks/useApplication";

const Home = () => {
  const { filterSearch } = useApplication();

  return (
    <>
      <Sidebar />
      <Header />
      <div className={styles.playlist__container}>
        <div id="result-playlists">
          <div className={styles.playlist}>
            <h2 className={styles.session}>Navegar por todas as seções</h2>
          </div>
          <div className={styles.scroll__container}>
            <div className={styles.scroll__container__list}>
              <section className={styles.offer__list}>
                {filterSearch !== "" ? <ItemArtist /> : <ContentItens />}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
