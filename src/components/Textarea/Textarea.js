import React from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";

function Textarea({ value, onChange }) {
  return (
    <>
      <label
        htmlFor="message"
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id="message"
          className={styles.messageInput}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default Textarea;
