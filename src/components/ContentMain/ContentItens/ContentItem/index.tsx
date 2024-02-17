import styles from "./ContentItem.module.scss";
import cards from "data/content.json";

type Props = (typeof cards)[0];

const ContentItem = (props: Props) => {
  const { label, id } = props;

  return (
    <a key={id} href="/#" className={styles.cards}>
      <div className={styles[`card${id}`]}>
        <img src={`assets/playlist/${id}.jpeg`} alt="card1" />
        <span>{label}</span>
      </div>
    </a>
  );
};

export default ContentItem;
