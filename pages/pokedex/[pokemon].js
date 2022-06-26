import styles from "../../styles/Projects/Pokedex/PokemonPage.module.css"
import Image from "next/image"
import Type from "../../components/Pokedex/Type"
import HorizontalDivider from "../../components/Home/HorizontalDivider"
import EvolutionCard from "../../components/Pokedex/EvolutionCard"

const PokemonPage = () => {
  return (
    <div id={styles.pokemonPage}>
      <div id={styles.identity}>
        <div id={styles.entryNumber}>#001</div>
        <div id={styles.name}>BULBASAUR</div>
      </div>
      <div id={styles.background}>
        <div id={styles.split}>
          <div id={styles.picture}>
            <Image 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
              layout="fill"
              objectFit="contain"
              alt="pokemon"
            />
          </div>
          <div id={styles.info}>
            <div id={styles.genus}>SEED POKéMON</div>
            <div id={styles.flavorText}>A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.</div>
            <div id={styles.stats}>
              <div id={styles.type}>
                <div>Type:</div>
                <Type type="grass"/>
                <Type type="poison"/>
              </div>
              <div id={styles.height}>Height: 
                <span className={styles.value}>0.7 m</span>
              </div>
              <div id={styles.weight}>Weight: 
                <span className={styles.value}>6.9 kg</span>
              </div>
            </div>
          </div>
        </div>
        <HorizontalDivider />
        <div id={styles.evolution}>
          <div id={styles.evolutionTitle}>EVOLUTION</div>
        </div>
        <div id={styles.evolutionChain}>
          <EvolutionCard 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
            name="Bulbasaur"
          />
          <div className={styles.arrow}> &gt; </div>
          <EvolutionCard 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png"
            name="Ivysaur"
          />
          <div className={styles.arrow}> &gt; </div>
          <EvolutionCard 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png"
            name="Venusaur"
          />
        </div>
      </div>
    </div>
  )
}

export default PokemonPage