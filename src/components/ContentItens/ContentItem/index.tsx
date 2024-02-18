import styles from "./ContentItem.module.scss";
import cards from "data/contentCards.json";

type Props = (typeof cards)[0];

const ContentItem = (props: Props) => {
  const { label, id } = props;

  return (
    <div className={styles.container__cards}>
      <a key={id} href="/#" className={styles.cards}>
        <div className={styles[`card${id}`]}>
          <img src={`assets/playlist/${id}.jpeg`} alt="card1" />
          <div className={styles.card__content}>
            <span>{label}</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              exercitationem iste, voluptatum, quia explicabo laboriosam rem
              adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
              asperiores harum? Dicta odio aut hic.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContentItem;
