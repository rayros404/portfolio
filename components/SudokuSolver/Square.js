import styles from "../../styles/Projects/SudokuSolver/Square.module.css"
import { memo } from "react"

const Square = memo((props) => {
  let style = {}
  if (props.isUserInputed) {
    style.color = "white"
  }
  if (props.isInvalid) {
    style.color = "white"
    style.backgroundColor = "#ff4422"
  }
  if (props.id === props.selectedSquare) {
    style.color = "black"
    style.backgroundColor = "#f7d74e"
  }
  return (
    <div 
      className={styles.square}
      onClick={props.handleSquareClick}
      style={style}
    >
        {props.value}
    </div>

  )
})

export default Square