import { useMemo, useState } from "react";
import styles from "./Item.module.scss";
import content from "data/contentCards.json";
import { useApplication } from "state/hooks/useApplication";
import ContentItem from "./ContentItem";


const ContentItens = () => {
  const [contentCard] = useState(content);
  const { currentCategory } = useApplication();

  const filterCards = useMemo(() => {
    if (currentCategory === "") {
      return contentCard;
    }
    return contentCard.filter((item) => item.categoryId === currentCategory);
  }, [currentCategory, contentCard]);

  return (
    <div className={styles.contentItens}>
      {filterCards.map((item) => (
        <ContentItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ContentItens;