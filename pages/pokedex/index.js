import styles from "../../styles/Projects/Pokedex/Pokedex.module.css"
import { useState, useEffect, } from "react"
import Image from "next/image"
import PokemonCard from "../../components/Pokedex/PokemonCard"
const allPokemonApi = "https://pokeapi.co/api/v2/generation/1"
const pokemonThumbnail = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"

const Pokedex = () => {
  const [data, setData] = useState()
  // useEffect(() => {
  // fetch(allPokemonApi)
  //   .then(response => response.json())
  //   .then(data =>{
  //     console.log(data.pokemon_species)
  //     setData(data.pokemon_species.map(pokemon => (
  //       pokemon.name
  //     )))
  //   })
  //   .then()
  // }, [])
  // console.log(data)
  // useEffect(() => {
  // fetch(pokemonPics)
  //   .then(response => response.json())
  //   .then(data =>{
  //     console.log(data.sprites.other.home.front_default)
  //     setData(data.sprites.other.home.front_default)
  //   })
  // }, [])
  // console.log(data)

  const [pokemonCards, setPokemonCards] = useState([])
  useEffect(() => {
    let thumbnails = []
    for (let i = 1; i < 152; i++) {
      thumbnails.push(`${pokemonThumbnail}${i}.png`)
    }
    setPokemonCards(thumbnails.map((thumbnail, idx) => (
      <PokemonCard 
        key={idx}
        src={thumbnail}
      />
    )))
  },[])
  
  return (
    <div id={styles.pokedex}>
      <div id={styles.title}>Pokédex</div>
      <div className={styles.cardContainer}>
        {pokemonCards}
      </div>
    </div>
  )
}

export default Pokedex