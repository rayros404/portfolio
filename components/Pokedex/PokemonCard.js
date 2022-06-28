import styles from "../../styles/Projects/Pokedex/PokemonCard.module.css"
import Image from "next/image"
import AddTag from "./AddTag"
import Tag from "./Tag"
import { useEffect, useState } from "react"

const PokemonCard = (props) => {
  const [tags, setTags] = useState()
  const [showTags, setShowTags] = useState(false)
  const toggleShow = () => {
    setShowTags(prevShowTags => !prevShowTags)
  }
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
  useEffect(() => {
    setTags(props.tags.map(tag => (
      <Tag 
        key={tag}
        name={tag}
      />
    )))
    console.log('ran')
  }, [props.tags])

  if (tags) {
   return (
    <div className={styles.pokemonCard}>
      <div className={styles.identity}>
        <span className={styles.entryNumber}>{formatEntryNumber(props.entryNumber)}</span>
        <span className={styles.name}>{props.name}</span>
      </div>
      <div className={styles.image}>
        <Image 
          src={props.src}
          layout="fill"
          objectFit="contain"
          alt="pokemon"
          priority
        />
        <div className={styles.circle}></div>
      </div>
      <div className={styles.tags}>
        <AddTag />
        <button 
          className={styles.showTags}
          onClick={toggleShow}  
        >
          {showTags ? "Hide Tags" : "Show Tags"}
          <div style={{transform: showTags ? "rotate(90deg)" : "rotate(-90deg"}}>&lt;</div>
        </button>
        <div className={styles.containerWrapper}>
          <div className={showTags ? `${styles.tagsContainer} ${styles.show}`: styles.tagsContainer}>
            {
              tags[0] ? 
              tags :
              <div style={{color: "white"}}>No Tags</div>
            }
          </div>
        </div>
        
      </div>
    </div>
  )
  }
  else {
    return <div>Loading</div>
  }

}

export default PokemonCard
