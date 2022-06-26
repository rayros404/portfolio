import styles from "../../styles/Projects/Pokedex/EvolutionCard.module.css"
import Image from "next/image"

const EvolutionCard = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.evolutionCard}>
        <Image 
          src={props.src}
          layout="fill"
          objectFit="contain"
          alt="pokemon"
        />
      </div>
      <div className={styles.name}>{props.name}</div>
    </div>
   
  )
}

export default EvolutionCard