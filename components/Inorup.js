import styles from "../styles/Inorup.module.css";

import Image from "next/image";
import Modal from "./Modal";

function Inorup() {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.logoContainer}>
        <Image
          src="/zimage-removebg-preview.png"
          width={100}
          height={100}
          alt="brand logo"
        />
      </div>
      <h1 className={styles.title1}>See what's happening ❤️</h1>
      <h2 className={styles.title2}>Join Hackatweet today.❤️</h2>
      <Modal name="Sign up" />

      <h3 className={styles.title3}>Already have an account ?</h3>
      <Modal name="Sign in" />
    </div>
  );
}
export default Inorup;
