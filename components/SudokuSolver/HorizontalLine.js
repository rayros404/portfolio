import styles from "../../styles/Projects/SudokuSolver/HorizontalLine.module.css"


const HorizontalLine = (props) => {
  return (
    <div 
      className={styles.line}
      style={{height: props.bold ? "2px" : "1px"}}  
    ></div>
  )
}

export default HorizontalLine