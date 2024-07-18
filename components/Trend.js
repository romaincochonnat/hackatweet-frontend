import styles from "../styles/Feed.module.css";

import Image from "next/image";

function Trend() {
  return (
    <div className={styles.hashtagBlock}>
      <h3 className={styles.title3}>#CLOVIS</h3>
      <span>nb tweets</span>
    </div>
  );
}
export default Trend;
