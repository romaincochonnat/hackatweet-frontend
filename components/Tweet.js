import styles from "../styles/Feed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import Image from "next/image";
import { useState } from "react";

function Tweet(props) {
  let [tweetContent, setTweetContent] = useState("");
  const user = useSelector((state) => state.credentials.value);

  return (
    <div className={styles.tweetBlock}>
      <div className={styles.tweetAuthor}>
        <div className={styles.photoContainer}>
          <img
            src={props.image}
            width={50}
            height={50}
            alt="brand logo"
            className={styles.roundImage}
          />
        </div>
        <h3 className={styles.title3}>{props.firstname}</h3>
        <h4 className={styles.title4}>{props.username} -</h4>
        <h4 className={styles.title4}>{props.date}</h4>
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
