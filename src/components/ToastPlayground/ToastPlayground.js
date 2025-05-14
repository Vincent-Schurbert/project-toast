import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import { VARIANT_OPTIONS } from "../../constants";
import RadioButton from "../RadioButton/RadioButton";
import Textarea from "../Textarea/Textarea";

function ToastPlayground() {
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const [message, setMessage] = React.useState("");

  function handleVariantChange(event) {
    setSelectedVariant(event.target.value);
  }

  function handleMessageChange(event) {
    console.log(event.target.value);
    setMessage(event.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <Textarea value={message} onChange={handleMessageChange} />
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant, index) => (
              <RadioButton
                key={index}
                id={variant}
                name={"variant"}
                isChecked={variant === selectedVariant}
                label={variant}
                onChange={handleVariantChange}
                value={variant}
              />
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
