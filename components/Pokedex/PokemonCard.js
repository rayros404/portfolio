import styles from "../../styles/Projects/Pokedex/PokemonCard.module.css"
import Image from "next/image"

const PokemonCard = (props) => {
  return (
    <div className={styles.pokemonCard}>
      <Image 
        src={props.src}
        layout="fill"
        objectFit="contain"
        alt="pokemon"
        priority
      />
      <div className={styles.circle}></div>
    </div>
  )
}

export default PokemonCard