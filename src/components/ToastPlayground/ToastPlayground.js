import React from "react";

import Button from "../Button";
import styles from "./ToastPlayground.module.css";

import { VARIANT_OPTIONS } from "../../constants";
import RadioButton from "../RadioButton/RadioButton";
import Textarea from "../Textarea/Textarea";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastPlayground() {
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const { addToast } = React.useContext(ToastContext);

  const [message, setMessage] = React.useState("");

  function handleVariantChange(event) {
    setSelectedVariant(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmitToast(event) {
    event.preventDefault();

    const success = addToast(message, selectedVariant);

    if (success) {
      setMessage("");
      setSelectedVariant(VARIANT_OPTIONS[0]);
    }
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmitToast}>
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
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
