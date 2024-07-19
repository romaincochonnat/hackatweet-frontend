import styles from "../styles/Feed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import Image from "next/image";
import { useEffect, useState } from "react";

function Tweet(props) {
  let [tweetContent, setTweetContent] = useState("");
  const user = useSelector((state) => state.credentials.value);
  let [isLiked, setIsLiked] = useState(false);
  let [styleHeart, setStyleHeart] = useState({
    cursor: "pointer",
    color: "",
  });
  let [nblike, setNblike] = useState(0);
  console.log(nblike);

  function deleteTweet() {
    fetch("http://localhost:3000/tweet", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: props.content,
      }),
    });
    props.fonction();
  }

  function getNbLike() {
    fetch("http://localhost:3000/tweet/nblike", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: props.content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNblike(data.nblike);
        console.log(data);
      });
  }

  useEffect(() => {
    getNbLike();
  }, []);

  function likeTweet() {
    if (!isLiked) {
      setStyleHeart({ cursor: "pointer", color: "#e19067" });
      setIsLiked(true);
      fetch("http://localhost:3000/tweet/like", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: props.content,
        }),
      });
      getNbLike();
      props.fonction();
    } else {
      setStyleHeart({ cursor: "pointer", color: "" });
      setIsLiked(false);
      fetch("http://localhost:3000/tweet/unlike", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: props.content,
        }),
      });
      getNbLike();
      props.fonction();
    }
  }

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
        <FontAwesomeIcon
          icon={faHeart}
          style={styleHeart}
          onClick={() => {
            likeTweet();
          }}
        />
        &nbsp; {nblike}
      </span>
      &nbsp;&nbsp;
      <FontAwesomeIcon
        icon={faTrash}
        style={{ color: "#ffffff", cursor: "pointer" }}
        onClick={() => {
          deleteTweet();
        }}
      />
    </div>
  );
}
export default Tweet;
