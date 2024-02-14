import styles from "./Seach.module.scss";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ search, setSearch }: Props) => {
  return (
    <div className={styles.header__search}>
      <img src="assets/icons/search.png" alt="" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="O que você quer ouvir?"
        autoCorrect="off"
      />
    </div>
  );
};

export default Search;
