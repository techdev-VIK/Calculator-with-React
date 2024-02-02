import styles from "./Button.module.css";

function ButtonContainer() {
  const buttonNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-",
    "0",
    "+",
    ".",
    "/",
    "*",
    "=",
    "C",
    "%",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button className={styles.button}>{buttonName}</button>
      ))}
    </div>
  );
}

export default ButtonContainer;
