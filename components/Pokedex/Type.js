import Image from "next/image"
import styles from "../../styles/Projects/Pokedex/Type.module.css"

const Type = (props) => {
  const colors = 
  {
    "normal": "#aaaa99",
    "fighting": "#bb5544",
    "flying": "#8899ff",
    "poison": "#aa5599",
    "ground": "#ddbb55",
    "rock": "#bbaa66",
    "bug": "#aabb22",
    "ghost": "#6666bb",
    "fire": "#ff4422",
    "water": "#3399ff",
    "grass": "#77cc55",
    "electric": "#ffcc33",
    "psychic": "#ff5599",
    "ice": "#66ccff",
    "dragon": "#7766ee"
  }

  return (
    <div 
      className={styles.type}
      style={{ backgroundColor: colors[props.type] }}  
    >
      {props.type.toUpperCase()}
    </div>
  )
}

export default Type