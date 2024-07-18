import styles from "../styles/Feed.module.css";
import { useState } from "react";
import Tweet from "./Tweet";

import Image from "next/image";

function Feed() {
  let [tweet, setTweet] = useState("");

  return (
    <main className={styles.mainFeed}>
      <div className={styles.tweetRedaction}>
        <input
          className={styles.inputTweet}
          type="text"
          placeholder="Tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet"
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
        />
        <div className={styles.infoTweetContainer}>
          <span className={styles.span}>{tweet.length}/280</span>
          <button className={styles.buttonTweet} onClick={() => {}}>
            Tweet
          </button>
        </div>
      </div>

      <div className={styles.tweetContainer}>
        <Tweet />
        <Tweet />
      </div>
    </main>
  );
}
export default Feed;
