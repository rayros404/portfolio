import styles from "../styles/Projects/SudokuSolver/SudokuSolver.module.css"
import Square from "../components/SudokuSolver/Square"
import PrimaryButton from "../components/Home/PrimaryButton"
import NumberButton from "../components/SudokuSolver/NumberButton"
import { useEffect, useState, useRef } from "react"
import next from "next"

const sudokuSolver = () => {
  const [board, setBoard] = useState([...Array(81)])
  const [selectedSquare, setSelectedSquare] = useState()

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

  const useOutsideClick = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target) && !numberBtnsRef.current.contains(event.target)) {
          setSelectedSquare()
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref, selectedSquare, numberBtnsRef])
  }
  const handleSquareClick = (square) => {
    setSelectedSquare(square)
  }
  const squares = board.map((square, idx) => (
    <Square 
      key={idx}
      id={idx}
      value={board[idx]}
      selectedSquare={selectedSquare}
      handleSquareClick={() => handleSquareClick(idx)}
    />
  ))
  const numberBtns = [1,2,3,4,5,6,7,8,9].map(number => (
    <NumberButton 
      key={number}
      number={number}
      selectedSquare={selectedSquare}
      setBoard={setBoard}
    />
  ))

  const boardRef = useRef(null)
  const numberBtnsRef = useRef(null)
  useOutsideClick(boardRef)



/*`````````````````````````````````````````````````````````` */



const isInRow = (board, position, value) => {
  const row = Math.floor(position / 4)
  const rowValues = board.slice(row * 4, (row + 1) *4)
  return rowValues.includes(value)
}

const isInCol = (board, position, value) => {
  const possibleCols = [0,1,2,3]
  const col = position % 4
  const colValues = possibleCols.map(val => (
    board[col + 4*val]
  ))
  return colValues.includes(value)
}

const isInQuadrant = (board, position, value) => {
  const possibleQuadrants = {
    0: [0,1,4,5],
    1: [2,3,6,7],
    2: [8,9,12,13],
    3: [10,11,14,15],
  }
  let quadrantValues= null
  for (const quad in possibleQuadrants) {
    if (possibleQuadrants[quad].includes(position)) {
      quadrantValues = possibleQuadrants[quad].map(pos => (
        board[pos]
      ))
      break
    }
  }
  return quadrantValues.includes(value)
}

const isValid = (board, position, value) => {
  return !(
    isInRow(board, position, value) || 
    isInCol(board, position, value) || 
    isInQuadrant(board, position, value)
    )
}

const generateNewBoard = (board, value) => {
  let nextSquare = null
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      nextSquare = i
      break
    }
  }
  let newBoard = [...board]
  newBoard[nextSquare] = value
  return newBoard
}

const solveBoard = (board) => {
  const possibleValues = [1,2,3,4]
  let stack = [board]
  let currentBoard = []
  let count = 0
  while (count < 3) {
    currentBoard = stack.pop()
    for (const value of possibleValues) {
      stack.push(generateNewBoard(currentBoard, value))
    }
    count ++
  }
  
  console.log(isValid(board, 10, 6))
}

const testBoard = [
  1, 16, null, null,
  2, null, 19, null,
  3, null, null, 27,
  4, 2, null, 6,
]












  return (
    <div id={styles.sudokuSolver}>
      <div id={styles.title}>Sudoku Solver</div>
      <main id={styles.main}>
        <div 
          id={styles.board}
          ref={boardRef}
        >
          <div id={styles.verticalLine1}></div>
          <div id={styles.verticalLine2}></div>
          <div id={styles.horizontalLine1}></div>
          <div id={styles.horizontalLine2}></div>
          {squares}

        </div>
        <div id={styles.btns}>
          <div 
            id={styles.numberBtns}
            ref={numberBtnsRef}  
          >
            {numberBtns}
          </div>
          <div id={styles.functionBtns}>
            <PrimaryButton 
              name="Solve"
              handleClick={() => solveBoard(testBoard)}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default sudokuSolver