import styles from "../../styles/Projects/Pokedex/PokemonInfo.module.css"
import Image from "next/image"

const PokemonInfo = () => {
  return (
    <div id={styles.pokemonInfo}>
      <div id={styles.identity}>
        <div id={styles.entryNumber}>001</div>
        <div id={styles.name}>Bulbasaur</div>
      </div>
      <div id={styles.picture}>
        <Image 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
          layout="fill"
          objectFit="contain"
          alt="pokemon"
        />
      </div>
    </div>
  )
}

export default PokemonInfo