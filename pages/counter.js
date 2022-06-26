import styles from "../styles/Projects/Counter.module.css"
import PrimaryButton from "../components/Home/PrimaryButton"
import SecondaryButton from "../components/Home/SecondaryButton"
import { useState } from "react"
const Counter = () => {
  const [count, setCount] = useState(0)
  const decrease = () => {
    setCount(prevCount => prevCount - 1)
  }
  const reset = () => {
    setCount(0)
  }
  const increase = () => {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <div id={styles.counter}>
      <div id={styles.title}>Counter</div>
      <div id={styles.count}>{count}</div>
      <div id={styles.btns}>
        <PrimaryButton 
          name="DECREASE"
          handleClick={decrease}
        />
        <SecondaryButton 
          name="RESET"
          handleClick={reset}
        />
        <PrimaryButton 
          name="INCREASE"
          handleClick={increase}
        />
      </div>
    </div>
  )
}

export default Counter