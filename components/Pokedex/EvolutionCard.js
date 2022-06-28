import styles from "../../styles/Projects/Pokedex/EvolutionCard.module.css"
import Image from "next/image"
import { useState, useEffect  } from "react"
const spriteApi = "https://pokeapi.co/api/v2/pokemon/"

const EvolutionCard = (props) => {
  const [sprite, setSprite] = useState()
  useEffect(() => {
    fetch(`${spriteApi}${props.name}`)
      .then(response => response.json())
      .then(data => {
        setSprite(data.sprites.other.home.front_default)
      })
  }, [props.name])
  if (sprite) {
   return (
    <div className={styles.wrapper}>
      <div className={styles.evolutionCard}>
        <Image 
          src={sprite}
          layout="fill"
          objectFit="contain"
          alt="pokemon"
        />
      </div>
      <div className={styles.name}>{props.name}</div>
    </div>
    )
  }
  else {
    return <div>Loading</div>
  }
}

export default EvolutionCard