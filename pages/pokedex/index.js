import styles from "../../styles/Projects/Pokedex/Pokedex.module.css"
import { useState, useEffect, } from "react"
import Image from "next/image"
import PokemonCard from "../../components/Pokedex/PokemonCard"
const allPokemonApi = "https://pokeapi.co/api/v2/pokedex/kanto/"
const pokemonThumbnail = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([])
  const [newTag, setNewTag] = useState(["", null])

  useEffect(() => {
    fetch(allPokemonApi)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data.pokemon_entries.map(pokemon => (
          {
            ...pokemon,
            tags: []
          }
        )))
      })
    
  },[])
  const pokemonCards= pokemonData.map(pokemon => (
    <PokemonCard 
      key={pokemon.entry_number}
      entryNumber={pokemon.entry_number}
      name={pokemon.pokemon_species.name}
      src={`${pokemonThumbnail}${pokemon.entry_number}.png`}
      tags={pokemon.tags}
      setNewTag={setNewTag}
    />
  ))

  const pushTag = (tags, tagToPush) => {
    if (tagToPush && !tags.includes(tagToPush)) return [...tags, tagToPush]
    return tags
  }

  const addTagToPokemon = (entryNumber) => {
    setPokemonData(pokemons => (
      pokemons.map(pokemon => {
        if (pokemon.entry_number === entryNumber) {
          const newTags = pushTag(pokemon.tags, newTag)
          return {...pokemon, tags: newTags}
        }
        return pokemon
      })
    ))
  }
  useEffect(() => {
    setPokemonData(pokemons => (
      pokemons.map(pokemon => {
        if (pokemon.entry_number === newTag[1]) {
          const newTags = pushTag(pokemon.tags, newTag[0])
          return {...pokemon, tags: newTags}
        }
        return pokemon
      })
    ))
  }, [newTag])
  
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