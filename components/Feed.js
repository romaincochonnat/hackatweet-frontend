import styles from "../styles/Feed.module.css";
import { useState } from "react";
import Tweet from "./Tweet";

import { useSelector } from "react-redux";

import Image from "next/image";

function Feed() {
  const user = useSelector((state) => state.credentials.value);

  let [allTweet, setAllTweet] = useState([]);
  let [currentTweet, setCurrentTweet] = useState("");

  function displayAllTweets() {
    fetch("http://localhost:3000/tweet/alltweet")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result === true) {
          setAllTweet(data.tweets);
        }
      });
  }

  let tweets = allTweet.map((x) => {
    return <Tweet content={x.content} />;
  });

  function postTweet() {
    fetch("http://localhost:3000/tweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        content: currentTweet,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result === true) {
          displayAllTweets();
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
              postTweet();
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
