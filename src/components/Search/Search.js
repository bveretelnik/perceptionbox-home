import Input from "@mui/material/Input";
import styles from "./Search.module.scss";

export default function Search({ setSearchTerm }) {
  return (
    <div className={styles.search}>
      <Input
        placeholder="Search for name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
