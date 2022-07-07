import styles from "../styles/Projects/SudokuSolver/SudokuSolver.module.css"
import Square from "../components/SudokuSolver/Square"
import PrimaryButton from "../components/Home/PrimaryButton"
import NumberButton from "../components/SudokuSolver/NumberButton"
import { useEffect, useState, useRef } from "react"

const sudokuSolver = () => {
  const [board, setBoard] = useState([...Array(81)].fill(
    {
      isInvalid: false,
      isUserInputed: false,
      value: undefined,
    }
  ))
  const [selectedSquare, setSelectedSquare] = useState()
  const [newValueFlag, setNewValueFlag] = useState(false)
  const [invalidFlag, setInvalidFlag] = useState(false)
  const [unsolvableFlag, setUnsolvableFlag] = useState(false)
  const boardRef = useRef(null)
  const numberBtnsRef = useRef(null)
  const unsolvableMessage = "This board is unsolvable! Trust me!"
  const invalidMessage = "Some squares are invalid! Fix them to solve!"

  // changes value of selected square
  const changeSquareValue = (val) => {
    if (parseInt(val) || val === "Backspace") {
      setBoard(prevBoard => prevBoard.map((square, idx) => {
        if (selectedSquare === idx) {
          return (
            val === "Backspace" ? 
            {
              isInvalid: false,
              isUserInputed: false,
              value: undefined
            } : 
            {
              ...square,
              isUserInputed: true,
              value: parseInt(val)
            }
          )
        }
        return square
      }))
      setNewValueFlag(true)
    }
  }
  
  // selects a square
  const handleSquareClick = (square) => {
    setSelectedSquare(square)
  }

  /*                 HELPER FUNCTIONS                          */
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
    if (value === undefined) return true
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

  /*                END OF HELPER FUNCTIONS                    */
  /*`````````````````````````````````````````````````````````` */

  const squares = board.map((square, idx) => (
    <Square 
      key={idx}
      id={idx}
      isInvalid={square.isInvalid}
      isUserInputed={square.isUserInputed}
      value={square.value}
      selectedSquare={selectedSquare}
      handleSquareClick={() => handleSquareClick(idx)}
    />
  ))
  const numberBtns = [1,2,3,4,5,6,7,8,9,"Backspace"].map(value => (
    <NumberButton 
      key={value}
      value={value}
      changeSquareValue={() => changeSquareValue(value)}
    />
  ))

  const solveBoard = (board) => {
    if (invalidFlag) {
      return
    }
    const possibleValues = [1,2,3,4,5,6,7,8,9]
    let stack = [[...board]]
    let currentBoard = [undefined]
    let nextSquare

    try {
      while (currentBoard.includes(undefined) && stack) {
        currentBoard = stack.pop()
        nextSquare = findNextSquare(currentBoard)
          for (const value of possibleValues) {
            if (isValid(currentBoard, nextSquare, value)) 
              stack.push(generateNewBoard(currentBoard, nextSquare, value))
          }
      }
      setBoard(prevBoard => prevBoard.map((square, idx) => (
        {
          ...square,
          value: currentBoard[idx]
        }
      )))
    }
    catch {
      setUnsolvableFlag(true)
      return
    }
    
      
  }
  const resetBoard = () => {
    setBoard([...Array(81)].fill(
      {
        isInvalid: false,
        isUserInputed: false,
        value: undefined,
      })
    )
    setUnsolvableFlag(false)
    setInvalidFlag(false)
  }

  // looks for invalid indices
  useEffect(() => {
    setUnsolvableFlag(false)
    const values = board.map(square => square.value)
    let invalidIndices = []
    for (let i = 0; i < 81; i++) {
      const temp = values[i]
      values[i] = undefined
      if (!isValid(values, i, temp)) {
        invalidIndices.push(i)
      }
      values[i] = temp
    }
    setBoard(prevBoard => prevBoard.map((square, idx) => {
      if (invalidIndices.includes(idx)) {
        return {...square, isInvalid: true}
      }
      return {...square, isInvalid: false}
    }))

    setNewValueFlag(false)
    if (invalidIndices.length) {
      setInvalidFlag(true)
    }
    else setInvalidFlag(false)
  }, [newValueFlag])


  // handles key presses when changing square value
  useEffect(() => {
    const handleKeyDown = (event) => {
      changeSquareValue(event.key)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  },[selectedSquare])

  // sets selected square to null if clicked outside board and number buttons
  useEffect(() => {
    let target = boardRef.current
    const handleClickOutside = (event) => {
      if (target && !target.contains(event.target) && !numberBtnsRef.current.contains(event.target)) {
        setSelectedSquare()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [boardRef, numberBtnsRef, selectedSquare])


  return (
    <div id={styles.sudokuSolver}>
      <div id={styles.title}>Sudoku Solver</div>
      <div id={styles.error}>
        {unsolvableFlag ? unsolvableMessage : ""}
        {invalidFlag ? invalidMessage : ""}
      </div>
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
              handleClick={() => solveBoard(board.map(square => square.value))}
            />
            <PrimaryButton 
              name="Reset"
              handleClick={resetBoard}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default sudokuSolver