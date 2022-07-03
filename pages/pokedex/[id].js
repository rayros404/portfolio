import styles from "../../styles/Projects/Pokedex/PokemonPage.module.css"
import Image from "next/image"
import Type from "../../components/Pokedex/Type"
import HorizontalDivider from "../../components/Home/HorizontalDivider"
import EvolutionCard from "../../components/Pokedex/EvolutionCard"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
const pokemonData = "https://pokeapi.co/api/v2/pokemon/";
const pokemonSpeciesData = "https://pokeapi.co/api/v2/pokemon-species/";

const PokemonPage = () => {
  const [data, setData] = useState()
  const [speciesData, setSpeciesData] = useState()
  const [evolutionData, setEvolutionData] = useState()
  const [error, setError] = useState()
  const router = useRouter()
  useEffect(() => { 
    if (Object.keys(router.query.length !== 0)) {
      fetch(`${pokemonData}${router.query.name}`)
        .then(response => response.json())
        .then(data => {
          setData(data)
        })
        .catch((error) => {
          setError(error)
        })
        
      fetch(`${pokemonSpeciesData}${router.query.name}`)
        .then(response => response.json())
        .then(data => {
          setSpeciesData(data)
          fetch(data.evolution_chain.url)
            .then(response => response.json())
            .then(data => {
              setEvolutionData(data)
            })
        })
    }
  }, [router.query.name, router.query.length])

  const formatEntryNumber = (number) => {
    if (number) {
      switch(number.toString().length) {
      case 1:
        return `#00${number}`
      case 2:
        return `#0${number}`
      case 3:
        return `#${number}`
      }
    }
  }
  const cleanFlavorText = (text) => {
    return text.replaceAll(/\[a-z]/g, " ")
  }
  const getTypes = (types) => {
    return types.map(typeElement => {
      let typeName = typeElement.type.name
      return <Type type={typeName} key={typeName}/>
    })
  }

  const getEvolutions = (chainData) => {
    let chain = []
    let nextEvolution = chainData
    while (nextEvolution) {
      chain.push(nextEvolution.species.name)
      nextEvolution = nextEvolution.evolves_to[0]
    }
    return chain.map(stage => (
      <EvolutionCard 
        key={stage}
        name={stage}
      />
    ))
  }
  

  if (data && speciesData && evolutionData) {
    return (
      <div id={styles.pokemonPage}>
        <div id={styles.identity}>
          <Link href="/pokedex">
            <div id={styles.backHome}>&lt;</div>
          </Link>
          <div id={styles.entryNumber}>{formatEntryNumber(speciesData.pokedex_numbers[0].entry_number)}</div>
          <div id={styles.name}>{data.name}</div>
        </div>
        <div id={styles.background}>
          <div id={styles.split}>
            <div id={styles.picture}>
              <Image 
                src={data.sprites.other.home.front_default}
                layout="fill"
                objectFit="contain"
                alt="pokemon"
                priority={true}
              />
            </div>
            <div id={styles.info}>
              <div id={styles.genus}>{speciesData.genera[7].genus}</div>
              <div id={styles.flavorText}>{cleanFlavorText(speciesData.flavor_text_entries[9].flavor_text)}</div>
              <div id={styles.stats}>
                <div id={styles.type}>Type:
                  <span id={styles.typeContainer}>
                    {getTypes(data.types)}
                  </span>
                </div>
                <div id={styles.height}>Height: 
                  <span className={styles.value}>{data.height / 10} m</span>
                </div>
                <div id={styles.weight}>Weight: 
                  <span className={styles.value}>{data.weight / 10} kg</span>
                </div>
              </div>
            </div>
          </div>
          {evolutionData.chain.evolves_to[0] &&
          <>
          <HorizontalDivider />
          <div id={styles.evolution}>
            <div id={styles.evolutionTitle}>EVOLUTION</div>
              <div id={styles.evolutionChain}>
                {getEvolutions(evolutionData.chain)}
            </div>
          </div>
          </>
          }
        </div>
      </div>
    )
  }
  
  else if (error) {
    return <div id={styles.error}>Could not find pokemon</div>
  }

  else {
    return <div id={styles.loading}>Loading...</div>
  }
}

export default PokemonPage