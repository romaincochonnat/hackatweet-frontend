import styles from "../styles/Inorup.module.css";
import { useState } from "react";

import Image from "next/image";
import Modal from "./Modal";

function Inorup() {

  const [showow, setShowow] = useState("");

  function show() {
    console.log("mierda")
    setShowow("Votre inscription est validée, faites maintenant un Sign In");
  }
console.log(showow)
  return (
    <div className={styles.globalContainer}>
      <div className={styles.logoContainer}>
        <Image
          src="/zimage-removebg-preview.png"
          width={75}
          height={75}
          alt="brand logo"
        />
      </div>
      <h1 className={styles.title1}>See what's happening</h1>
      <h2 className={styles.title2}>Join Hackatweet today ❤️</h2>
      <Modal name="Sign up" show={show} />

      <h3 className={styles.title3}>Already have an account ?</h3>
      <Modal name="Sign in" />
      <h3 className={styles.title4}>{showow}</h3>
    </div>
  );
}
export default Inorup;
