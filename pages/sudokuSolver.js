import styles from "../styles/Projects/SudokuSolver/SudokuSolver.module.css"
import Square from "../components/SudokuSolver/Square"
import PrimaryButton from "../components/Home/PrimaryButton"
import { useState } from "react"

const sudokuSolver = () => {
  const [board, setBoard] = useState([...Array(81)])
  const squares = board.map((square, idx) => (
    <Square 
      key={idx}
      value={3}
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