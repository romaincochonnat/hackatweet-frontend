import styles from "../styles/Home.module.css";
import Inorup from "./Inorup"


import Image from "next/image";

function Home() {
  let inscription = true




  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftContent}>
          <Image
            src="/zimage-removebg-preview.png"
            width={500}
            height={500}
            alt="brand logo"
          />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.rightContentA}>
            <Inorup />
          </div>
          <div className={styles.rightContentB}>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
