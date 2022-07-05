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
  const row = Math.floor(position / 9)
  const rowValues = board.slice(row * 9, (row + 1) * 9)
  return rowValues.includes(value)
}

const isInCol = (board, position, value) => {
  const possibleCols = [0,1,2,3,4,5,6,7,8]
  const col = position % 9
  const colValues = possibleCols.map(val => (
    board[col + 9*val]
  ))
  return colValues.includes(value)
}

const isInQuadrant = (board, position, value) => {
  const possibleQuadrants = {
    0: [0,1,2,9,10,11,18,19,20],
    1: [3,4,5,12,13,14,21,22,23],
    2: [6,7,8,15,16,17,24,25,26],
    3: [27,28,29,36,37,38,45,46,47],
    4: [30,31,32,39,40,41,48,49,50],
    5: [33,34,35,42,43,44,51,52,53],
    6: [54,55,56,63,64,65,72,73,74],
    7: [57,58,59,66,67,68,75,76,77],
    8: [60,61,62,69,70,71,78,79,80],
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

const findNextSquare = (board) => {
  let nextSquare = null
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      nextSquare = i
      break
    }
  }
  return nextSquare
}

const generateNewBoard = (board, position, value) => {
  let newBoard = [...board]
  newBoard[position] = value
  return newBoard
}

const solveBoard = (board) => {
  const possibleValues = [1,2,3,4,5,6,7,8,9]
  let stack = [[...board]]
  let currentBoard = [undefined]
  let nextSquare

  while (currentBoard.includes(undefined)) {
    currentBoard = stack.pop()
    nextSquare = findNextSquare(currentBoard)
      for (const value of possibleValues) {
        if (isValid(currentBoard, nextSquare, value)) 
          stack.push(generateNewBoard(currentBoard, nextSquare, value))
      }
  }

    setBoard(currentBoard)
}












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
              handleClick={() => solveBoard(board)}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default sudokuSolver