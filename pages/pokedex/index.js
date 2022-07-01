import styles from "../../styles/Projects/Pokedex/Pokedex.module.css"
import { useState, useEffect, } from "react"
import Image from "next/image"
import Searchbar from "../../components/Pokedex/Searchbar"
import PokemonCard from "../../components/Pokedex/PokemonCard"
import PrimaryButton from "../../components/Home/PrimaryButton"
const allPokemonApi = "https://pokeapi.co/api/v2/pokedex/kanto/"
const pokemonThumbnail = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([])
  const [newTag, setNewTag] = useState(["", null])
  const [nameSearch, setNameSearch] = useState("")
  const [tagSearch, setTagSearch] = useState("")
  const [loadedCards, setLoadedCards] = useState(20)

  useEffect(() => {
    fetch(allPokemonApi)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data.pokemon_entries.map(pokemon => (
          {
            ...pokemon,
            tags: [""]
          }
        )))
      })
    
  },[])

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

  useEffect(() => {
    setLoadedCards(20)

  }, [nameSearch, tagSearch])



  const handleNameChange = (event) => {
    setNameSearch(event.target.value)
  }
  const handleTagChange = (event) => {
    setTagSearch(event.target.value)
  }

  const searchForTag = (tags, currentTag) => {
    for (const tag of tags) {
      if (tag.toLowerCase().includes(currentTag.toLowerCase())) return true
    }
    return false
  }

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

  const handleLoadMore = () => {
    setLoadedCards(prev => prev + 20)
  }
  
  const filteredData = pokemonData.filter(pokemon => {
    const name = pokemon.pokemon_species.name.toLowerCase()
    const nameFlag = name.includes(nameSearch.toLowerCase())
    const tagFlag = searchForTag(pokemon.tags, tagSearch)
    return nameFlag && tagFlag
  })
  const pokemonCards= filteredData.map(pokemon => (
    <PokemonCard 
    key={pokemon.entry_number}
    entryNumber={pokemon.entry_number}
    name={pokemon.pokemon_species.name}
    src={`${pokemonThumbnail}${pokemon.entry_number}.png`}
    tags={pokemon.tags}
    setNewTag={setNewTag}
    route={{
      pathname: `pokedex/[id]`,
      query: {
        id: pokemon.entry_number,
        name: pokemon.pokemon_species.name
      }
    }}
    />
    ))
    
  console.log(pokemonCards.length)
  console.log(loadedCards)
  
  if (pokemonCards) {
    return (
      <div id={styles.pokedex}>
        <div id={styles.title}>POKéDEX</div>
        <div id={styles.sticky}>
          <Searchbar
            name="name"
            value={nameSearch}
            handleChange={handleNameChange}
          />
          <Searchbar
            name="tag"
            value={tagSearch}
            handleChange={handleTagChange}
          />
        </div>  
        <div className={styles.cardContainer}>
          {pokemonCards.slice(0, loadedCards)}
        </div>
        {
          loadedCards < pokemonCards.length &&
          <div id={styles.loadMore}>
            <PrimaryButton 
              name="Load More"
              handleClick={handleLoadMore}
            />
          </div>
        }
      </div>
    )
  }
  else {
    return <div style={{color: "white"}}>Loading ... </div>
  }
}

export default Pokedex