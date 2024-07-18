import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "../styles/Modal.module.css";
import Image from "next/image";

const App = (props) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  let phrase = "";
  if (props.name === "Sign up") {
    phrase = "Create your Hackatweet account ❤️";
  } else if (props.name === "Sign in") {
    phrase = "Sign in with luv ❤️";
  }

  let modalContent;
  modalContent = (
    <div className={styles.modalContent}>
      <Image
        src="/zimage-removebg-preview.png"
        width={100}
        height={100}
        alt="brand logo"
      />
      <h2 className={styles.title2}>Join Hackatweet today.❤️</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="password"
        placeholder="firstname"
        onChange={(e) => setFirstname(e.target.value)}
        value={firstname}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className={styles.signUp} onClick={() => signup()}>
        {props.name}
      </button>
    </div>
  );

  function signup() {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        firstname: firstname,
        password: password,
      }),
    });
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {props.name}
      </Button>
      <Modal
        title={phrase}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {modalContent}
      </Modal>
    </>
  );
};
export default App;
