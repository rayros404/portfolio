import styles from "../../styles/Projects/SudokuSolver/Square.module.css"

const Square = (props) => {

  const selected = {
    color: "black",
    backgroundColor: "#f7d74e",
  }
  return (
    <div 
      className={styles.square}
      onClick={props.handleSquareClick}
      style={props.id === props.selectedSquare ? selected : {}}
    >
        {props.value}
    </div>

  )
}

export default Square