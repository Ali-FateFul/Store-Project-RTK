import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHadler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHadler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
