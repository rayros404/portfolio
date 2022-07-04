import styles from "../../styles/Projects/SudokuSolver/Square.module.css"

const Square = (props) => {

  return (
    <div 
      className={styles.square}
      onClick={props.handleSquareClick}
    >
        {props.value}
    </div>

  )
}

export default Square