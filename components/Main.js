import styles from "../styles/Feed.module.css";
import Trend from "./Trend";
import Feed from "./Feed";
import Image from "next/image";

function Main() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftContent}>
          <div>
            <Image
              src="/zimage-removebg-preview.png"
              width={100}
              height={100}
              alt="brand logo"
            />
          </div>
          <div>
            <div>
              <Image
                src="/zimage-removebg-preview.png"
                width={100}
                height={100}
                alt="brand logo"
              />
            </div>
            <button
              className={styles.buttonLogout}
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          </div>
        </div>
        <div className={styles.centerContent}>
          <Feed />
        </div>
        <div className={styles.rightContent}>
          <h1 className={styles.title2}>Trends</h1>
          <div className={styles.hashtagContainer}>
            <Trend />
            <Trend />
            <Trend />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
