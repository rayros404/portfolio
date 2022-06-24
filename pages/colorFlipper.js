import styles from "../styles/Projects/ColorFlipper.module.css"
import SecondaryButton from "../components/Home/SecondaryButton"
import { useState } from "react"

const ColorFlipper = () => {
  const simpleColors = ["Black", "White", "Red", "Yellow", "Blue", "Orange", "Green", "Violet"]
  const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

  // true = simple | false = hex
  const [mode, setMode] = useState(true)
  const [color, setColor] = useState("Black")

  const getSimpleColor = () => {
    let randomIdx = Math.floor(Math.random() * 8)
    if (simpleColors[randomIdx] === color) {
      if (randomIdx === 7) randomIdx--
      else randomIdx++
    }
    return simpleColors[randomIdx]
  }
  const getRandomHexValue = () => {
    return Math.floor(Math.random() * 16)
  }
  const getHexColor = () => {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
      hexColor += hexValues[getRandomHexValue()]
    }
    return hexColor
  }
  const toggleSimple = () => {
    setMode(true)
  }
  const toggleHex = () => {
    setMode(false)
  }
  
  const changeColor = () => {
    mode ? setColor(getSimpleColor()) : setColor(getHexColor())
  }
  
  return (
    <div id={styles.colorFlipper}>
      <div id={styles.title}>
        Color Flipper
      </div>
      <div id={styles.btns}>
        <button 
          id={styles.simpleBtn}
          className={styles.modeBtn}
          style={{border: mode ? "2px solid #f7d74e" : "2px solid black" }}
          onClick={toggleSimple}
        >
          Simple
        </button>
        <button 
          id={styles.hexBtn}
          className={styles.modeBtn}
          style={{border: !mode ? "2px solid #f7d74e" : "2px solid black" }}
          onClick={toggleHex}
        >
          Hex
        </button>
      </div>
      <SecondaryButton
        name="Change Color"
        handleClick={changeColor}
      />
      <div 
        id={styles.colorBox}  
        style={{backgroundColor: color}}  
      >
        <div id={styles.color}>
          {color}
        </div>
      </div>
    </div>
  )
}

export default ColorFlipper