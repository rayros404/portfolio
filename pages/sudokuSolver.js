import styles from "../styles/Projects/SudokuSolver/SudokuSolver.module.css"
import Square from "../components/SudokuSolver/Square"
import VerticalLine from "../components/SudokuSolver/VerticalLine"
import HorizontalLine from "../components/SudokuSolver/HorizontalLine"
import PrimaryButton from "../components/Home/PrimaryButton"

const sudokuSolver = () => {
  return (
    <div id={styles.sudokuSolver}>
      <div id={styles.title}>Sudoku Solver</div>
      <main id={styles.main}>
        <div id={styles.board}>
          <HorizontalLine bold={true}/>
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <HorizontalLine/>
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <HorizontalLine/>
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <HorizontalLine bold={true}/>
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <HorizontalLine/>
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <HorizontalLine/>
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <HorizontalLine bold={true}/>
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <HorizontalLine/>
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <HorizontalLine/>
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine/>
          <Square />
          <VerticalLine bold={true}/>
          <HorizontalLine bold={true}/>
          

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