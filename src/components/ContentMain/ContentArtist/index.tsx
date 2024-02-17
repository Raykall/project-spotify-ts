import styles from "./ItemArtist.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import contentArtist from "data/artist.json";
import { useMemo, useState } from "react";
import { useApplication } from "hooks/useApplication";
import classNames from "classnames";

const ContentArtist = () => {
  const [artistList] = useState(contentArtist);
  const { filterSearch } = useApplication();
  const listSearch = artistList.artists;

  const listFilter = useMemo(() => {
    if (filterSearch == "") {
      return listSearch;
    } else {
      return listSearch.filter((list) =>
        list.name.toLocaleLowerCase().includes(filterSearch.toLocaleLowerCase())
      );
    }
  }, [filterSearch]);

  return (
    <div>
      {listFilter.map((opcao) => (
        <div
          id="result-artist"
          className={classNames({
            [styles.hidden]: true,
            [styles["hidden--active"]]: filterSearch == "",
          })}
          key={opcao.id}
        >
          <div className={styles.grid__container}>
            <div className={styles.artist__card}>
              <div className={styles.card__img}>
                <img
                  className={styles.artist__img}
                  alt="imagem do artista"
                  src={opcao.urlImg}
                />
                <div className={styles.play}>
                  <span className={styles.fa__play}>
                    <FontAwesomeIcon icon={faPlay} />
                  </span>
                </div>
              </div>
              <div className={styles.card__text}>
                <a title={opcao.name} className={styles.vst} href="/#">
                  <span className={styles.artist__name} id="artist-name">
                    {opcao.name}
                  </span>
                  <span className={styles.artist__categorie}>
                    {opcao.genre}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentArtist;
