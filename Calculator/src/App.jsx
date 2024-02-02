import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import ButtonContainer2 from "./Components/ButtonContainer2";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
      <ButtonContainer2></ButtonContainer2>
    </div>
  );
}

export default App;
