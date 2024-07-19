import styles from "../styles/Feed.module.css";
import { useState } from "react";
import Tweet from "./Tweet";

import { useSelector } from "react-redux";

import Image from "next/image";

function Feed() {
  let [allTweet, setAllTweet] = useState([]);
  let [currentTweet, setCurrentTweet] = useState("");

  let tweets = allTweet.map((x) => {
    return <Tweet content={x} />;
  });

  function postTweet() {
    fetch("http://localhost:3000/tweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: username,
        content: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result === true) {
        }
      });
  }
  return (
    <main className={styles.mainFeed}>
      <h1 className={styles.title2}>Home</h1>
      <div className={styles.tweetRedaction}>
        <input
          className={styles.inputTweet}
          type="text"
          placeholder="Tweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet"
          onChange={(e) => setCurrentTweet(e.target.value)}
          value={currentTweet}
        />
        <div className={styles.infoTweetContainer}>
          <span className={styles.span}>{currentTweet.length}/280</span>
          <button
            className={styles.buttonTweet}
            onClick={() => {
              setAllTweet([...allTweet, currentTweet]);
              setCurrentTweet("");
            }}
          >
            Tweet
          </button>
        </div>
      </div>

      <div className={styles.tweetContainer}>{tweets}</div>
    </main>
  );
}
export default Feed;
