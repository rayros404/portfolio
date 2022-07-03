import styles from "../../styles/Projects/SudokuSolver/VerticalLine.module.css"


const VerticalLine = (props) => {
  return (
    <div 
      className={styles.line}
      style={{width: props.bold ? "2px" : "1px"}}  
    ></div>
  )
}

export default VerticalLine