import styles from "../styles/Feed.module.css";

import Image from "next/image";

function Trend() {
  return (
    <>
      <div className={styles.hashtagBlock}>
        <h3 className={styles.title3}>#Coding</h3>
        <span>2</span>
      </div>
      <div className={styles.hashtagBlock}>
        <h3 className={styles.title3}>#Javascript</h3>
        <span>5</span>
      </div>
      <div className={styles.hashtagBlock}>
        <h3 className={styles.title3}>#Curiosity</h3>
        <span>3</span>
      </div>
    </>
  );
}
export default Trend;
