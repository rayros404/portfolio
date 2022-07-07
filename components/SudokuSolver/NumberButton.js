import styles from "../../styles/Projects/SudokuSolver/NumberButton.module.css"


const NumberButton = (props) => {
  return (
    <div 
      className={styles.numberBtn}
      onClick={props.changeSquareValue}
    >
      {props.value === "Backspace" ? "X" : props.value}
    </div>
  )
}

export default NumberButton