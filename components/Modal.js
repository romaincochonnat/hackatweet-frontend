import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "../styles/Modal.module.css";
import Image from "next/image";
import { Redirect } from "react-router-dom";

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
  function signin() {
    fetch("http://localhost:3000/users/signin", {
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
          return <Redirect to="/feed" />;
        }
      });
  }

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ backgroundColor: colorButton }}
      >
        {props.name}
      </Button>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null} // Enlever les boutons Cancel et OK
      >
        {modalContent}
      </Modal>
    </>
  );
};
export default App;
