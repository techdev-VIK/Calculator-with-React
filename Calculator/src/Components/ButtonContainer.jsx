import styles from "./Button.module.css";

function ButtonContainer() {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.button}>C</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>3</button>
      <button className={styles.button}>4</button>
    </div>
  );
}

export default ButtonContainer;
