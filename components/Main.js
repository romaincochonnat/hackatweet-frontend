import styles from "../styles/Feed.module.css";
import Trend from "./Trend";
import Feed from "./Feed";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { logout } from "../reducers/credentials";

function Main() {
  const user = useSelector((state) => state.credentials.value);
  const router = useRouter();
  const dispatch = useDispatch();

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
            <div className={styles.userBlock}>
              <div>
                <Image
                  src="/zimage-removebg-preview.png"
                  width={100}
                  height={100}
                  alt="brand logo"
                />
              </div>
              <h3>{user.username}</h3>
            </div>
            <button
              className={styles.buttonLogout}
              onClick={() => {
                dispatch(logout());
                router.push("/");
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
