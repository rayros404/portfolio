import styles from "../../styles/Projects/Pokedex/Pokedex.module.css"
import { useState, useEffect, } from "react"
import Image from "next/image"
import PokemonCard from "../../components/Pokedex/PokemonCard"
const allPokemonApi = "https://pokeapi.co/api/v2/pokedex/kanto/"
const pokemonThumbnail = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"

const Pokedex = () => {
  const [pokemonCards, setPokemonCards] = useState()
  useEffect(() => {
    fetch(allPokemonApi)
      .then(response => response.json())
      .then(data => {
        const pokemon = data.pokemon_entries
        setPokemonCards(pokemon.map((mon, idx) => (
          <PokemonCard 
            key={mon.entry_number}
            entryNumber={mon.entry_number}
            name={mon.pokemon_species.name}
            src={`${pokemonThumbnail}${mon.entry_number}.png`}
            tags={[]}
          />
        )))
      })
  },[])
  
  if (pokemonCards) {
    return (
      <div id={styles.pokedex}>
        <div id={styles.title}>Pokédex</div>
        <div className={styles.cardContainer}>
          {pokemonCards}
        </div>
      </div>
    )
  }
  else {
    return <div>Loading</div>
  }
}

export default Pokedex