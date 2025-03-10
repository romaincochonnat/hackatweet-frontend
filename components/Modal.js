import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "../styles/Modal.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/credentials";

const App = (props) => {
  let path = "https://hackatweet-backend-black.vercel.app/";
  const dispatch = useDispatch();
  const user = useSelector((state) => state.credentials.value);

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  let phrase = "";
  let colorButton = "";
  let hidden = "";
  let signingin = "";
  if (props.name === "Sign up") {
    phrase = "Create your Hackatweet account ❤️";
  } else if (props.name === "Sign in") {
    phrase = "Sign in with luv ❤️";
    colorButton = "#e19067";
    hidden = true;
    signingin = true;
  }

  let modalContent;
  modalContent = (
    <div className={styles.modalContent}>
      <div style={{ width: 100, height: 100 }}>
        <Image src="/zimage.jpg" width={100} height={100} alt="brand logo" />
      </div>

      <h2 className={styles.title2}>{phrase}</h2>
      {!hidden ? (
        <input
          className={styles.input}
          type="text"
          placeholder="firstname"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
        />
      ) : null}
      <input
        className={styles.input}
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        className={styles.input}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {!hidden ? (
        <input
          className={styles.input}
          type="text"
          placeholder="URL Image de profil"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
      ) : null}
      <button
        className={styles.buttonModal}
        onClick={() => {
          if (signingin) {
            signin();
          } else {
            signup();
          }
        }}
      >
        {props.name}
      </button>
    </div>
  );

  function signup() {
    fetch(`${path}users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        firstname: firstname,
        password: password,
        image: image,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          handleCancel(false);
          props.show();
        }
      });
  }
  function signin() {
    fetch(`${path}users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          dispatch(login(data.info));
          router.push("/main");
        }
      });
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {props.name}
      </Button>
      <Modal
        open={open}
        confirmLoading={confirmLoading}
        footer={null} // Enlever les boutons Cancel et OK
        onCancel={handleCancel}
      >
        {modalContent}
      </Modal>
    </>
  );
};
export default App;
