import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "../styles/Modal.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const App = (props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");

  const showModal = () => {
    setOpen(true);
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
    console.log(signingin);
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
      })
    }).then(response => response.json())
    .then(data => {
      if (data.result) {
      handleCancel(false)
      props.show()}
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
        console.log("prout2");
        console.log(data);
        if (data.result === true) {
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
