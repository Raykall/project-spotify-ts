import styles from "./Category.module.scss";
import categoryButtons from "data/category.json";
import classNames from "classnames";

type IOpcao = (typeof categoryButtons)[0];

interface Props {
  category: number | null;
  setCategory: React.Dispatch<React.SetStateAction<number | null>>;
}

const Category = ({ category, setCategory }: Props) => {
  function selecionarCategory(opcao: IOpcao) {
    if (category === opcao.id) {
      return setCategory(null);
    }
    return setCategory(opcao.id);
  }
  return (
    <div className={styles.category}>
      {categoryButtons.map((opcao) => (
        <button
          className={classNames({
            [styles.category__button]: true,
            [styles["category__button--ativo"]]: category === opcao.id,
          })}
          key={opcao.id}
          onClick={() => selecionarCategory(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
};

export default Category;
