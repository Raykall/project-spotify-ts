import { useApplication } from "hooks/useApplication";
import styles from "./Seach.module.scss";

const Search = () => {
  const { filterSearch, setFilterSearch } = useApplication();
  return (
    <div className={styles.header__search}>
      <img src="assets/icons/search.png" alt="" />
      <input
        value={filterSearch}
        onChange={(e) => setFilterSearch(e.target.value)}
        type="text"
        placeholder="O que você quer ouvir?"
      />
    </div>
  );
};

export default Search;
