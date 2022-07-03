import styles from "../styles/Projects/SudokuSolver/SudokuSolver.module.css"
import PrimaryButton from "../components/Home/PrimaryButton"

const sudokuSolver = () => {
  return (
    <div id={styles.sudokuSolver}>
      <div id={styles.title}>Sudoku Solver</div>
      <main id={styles.main}>
        <div id={styles.board}></div>
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