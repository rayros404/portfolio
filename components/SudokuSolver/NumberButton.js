import styles from "../../styles/Projects/SudokuSolver/NumberButton.module.css"


const NumberButton = (props) => {
  return (
    <div className={styles.numberBtn}>{props.number}</div>
  )
}

export default NumberButton