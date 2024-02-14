import styles from "./Item.module.scss";
import contentCards from "data/content.json";

const ItemContent = () => {
  return (
    <>
      {contentCards.map((card) => (
        <a key={card.id} href="/#" className={styles.cards}>
          <div className={styles[`card${card.id}`]}>
            <img src={`assets/playlist/${card.id}.jpeg`} alt="card1" />
            <span>{card.label}</span>
          </div>
        </a>
      ))}
    </>
  );
};

export default ItemContent;
