import styles from "./ContentMain.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

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
              <a href="/#" className={styles.cards}>
                <div className={styles.card1}>
                  <img src="assets/playlist/1.jpeg" alt="card1" />
                  <span>Boas festas</span>
                </div>
              </a>

              <a href="/#" className={styles.cards}>
                <div className={styles.card2}>
                  <img src="assets/playlist/2.png" alt="card2" />
                  <span>Feitos para você</span>
                </div>
              </a>

              {/*
                <a href="" className="cards">
                  <div className="cards card3">
                    <img src={Playlist3} alt="" />
                    <span>Lançamentos</span>
                  </div>
                </a>

                
                <a href="" className="cards">
                  <div className="cards card4">
                    <img src={Playlist4} alt="" />
                    <span>Creators</span>
                  </div>
                </a>

                
                <a href="" className="cards">
                  <div className="cards card5">
                    <img src={Playlist5} alt="" />
                    <span>Para treinar</span>
                  </div>
                </a>

               
                <a href="" className="cards">
                  <div className="cards card6">
                    <img src={Playlist6} alt="" />
                    <span>Podcasts</span>
                  </div>
                </a>

                
                <a href="" className="cards">
                  <div className="cards card7">
                    <img src={Playlist7} alt="" />
                    <span>Sertanejo</span>
                  </div>
                </a>

                
                <a href="" className="cards">
                  <div className="cards card8">
                    <img src={Playlist8} alt="" />
                    <span>Samba e pagode</span>
                  </div>
                </a>

                
                <a href="" className="cards">
                  <div className="cards card9">
                    <img src={Playlist9} alt="" />
                    <span>Funk</span>
                  </div>
                </a>

                
                <a href="" className="cards">
                  <div className="cards card10">
                    <img src={Playlist10} alt="" />
                    <span>MPB</span>
                  </div>
                </a>

                
                <a href="" className="cards">
                  <div className="cards card11">
                    <img src={Playlist11} alt="" />
                    <span>Rock</span>
                  </div>
                </a>

                
                <a href="" className="cards">
                  <div className="cards card12">
                    <img src={Playlist12} alt="" />
                    <span>Hip Hop</span>
                  </div>
                </a>

                
                <a href="" className="cards">
                  <div className="cards card13">
                    <img src={Playlist13} alt="" />
                    <span>Indie</span>
                  </div>
                </a>

                
                <a href="" className="cards">
                  <div className="cards card14">
                    <img src={Playlist14} alt="" />
                    <span>Relax</span>
                  </div>
                </a>

                
                <a href="" className="cards">
                  <div className="cards card15">
                    <img src={Playlist15} alt="" />
                    <span>Música Latina</span>
                  </div>
                </a> */}
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
