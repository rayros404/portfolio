import styles from "../../styles/Projects/SudokuSolver/NumberButton.module.css"


const NumberButton = (props) => {
  const handleClick = () => {
    if (props.selectedSquare) {
      props.setBoard(prevBoard => prevBoard.map((square, idx) => {
        if (props.selectedSquare === idx) {
          return props.number
        }
        return square
      }))
    }
  }
  return (
    <div 
      className={styles.numberBtn}
      onClick={handleClick}
    >
      {props.number}
    </div>
  )
}

export default NumberButton