import styles from "../styles/Feed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import { useState } from "react";

function Tweet(props) {
  let [tweetContent, setTweetContent] = useState("");

  return (
    <div className={styles.tweetBlock}>
      <div className={styles.tweetAuthor}>
        <div className={styles.photoContainer}>
          <Image
            src="/ridah.png"
            width={100}
            height={100}
            alt="brand logo"
            className={styles.roundImage}
          />
        </div>
        <h3 className={styles.title3}>Firstname</h3>
        <h4 className={styles.title4}>Username -</h4>
        <h4 className={styles.title4}>heures</h4>
      </div>
      <p className={styles.tweet}>{props.content}</p>
      <span className={styles.tweet}>
        <FontAwesomeIcon icon={faHeart} />
        &nbsp;nb like
      </span>
    </div>
  );
}
export default Tweet;
