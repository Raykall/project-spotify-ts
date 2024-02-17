import styles from "./Category.module.scss";
import categoryButtons from "data/category.json";
import classNames from "classnames";
import { useApplication } from "hooks/useApplication";

const Category = () => {
  const { setCurrentCategory, currentCategory } = useApplication();

  const handleClickButton = (id: string) => {
    if (id === currentCategory) {
      setCurrentCategory("");
      return;
    }
    setCurrentCategory(id);
  };

  return (
    <div className={styles.category}>
      {categoryButtons.map((opcao) => (
        <button
          className={classNames({
            [styles.category__button]: true,
            [styles["category__button--ativo"]]: currentCategory === opcao.id,
          })}
          key={opcao.id}
          onClick={() => handleClickButton(opcao.id)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
};

export default Category;
