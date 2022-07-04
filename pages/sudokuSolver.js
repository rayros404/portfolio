import styles from "../styles/Projects/SudokuSolver/SudokuSolver.module.css"
import Square from "../components/SudokuSolver/Square"
import PrimaryButton from "../components/Home/PrimaryButton"
import { useEffect, useState } from "react"

const sudokuSolver = () => {
  const [board, setBoard] = useState([...Array(81)])
  const [selectedSquare, setSelectedSquare] = useState()
  const [value, setValue] = useState()

  useEffect(() => {
    const handleKeyPress = (event) => {
      let value = parseInt(event.key)
      if (value) {
        setBoard(prevBoard => prevBoard.map((square, idx) => {
          if (selectedSquare === idx) {
            return value
          }
          return square
        }))
      }
    }
    window.addEventListener("keypress", handleKeyPress)
    return () => window.removeEventListener("keypress", handleKeyPress)
  },[selectedSquare])
  const handleSquareClick = (square) => {
    setSelectedSquare(square)
  }
  const squares = board.map((square, idx) => (
    <Square 
      key={idx}
      value={board[idx]}
      handleSquareClick={() => handleSquareClick(idx)}
    />
  ))

  return (
    <div id={styles.sudokuSolver}>
      <div id={styles.title}>Sudoku Solver</div>
      <main id={styles.main}>
        <div id={styles.board}>
          <div id={styles.verticalLine1}></div>
          <div id={styles.verticalLine2}></div>
          <div id={styles.horizontalLine1}></div>
          <div id={styles.horizontalLine2}></div>
          {squares}

        </div>
        <div id={styles.btns}>
          <div id={styles.numberBtns}>
            </div>
          <PrimaryButton 
            name="Solve"
          />

        </div>
      </main>
    </div>
  )
}

export default sudokuSolver