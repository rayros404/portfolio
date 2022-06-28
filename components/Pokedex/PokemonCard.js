import styles from "../../styles/Projects/Pokedex/PokemonCard.module.css"
import Image from "next/image"
import AddTag from "./AddTag"
import Tag from "./Tag"
import { useState } from "react"

const PokemonCard = (props) => {
  const [showTags, setShowTags] = useState(false)
  const toggleShow = () => {
    setShowTags(prevShowTags => !prevShowTags)
  }
   return (
    <div className={styles.pokemonCard}>
      <div className={styles.identity}>
        <span className={styles.entryNumber}>#001</span>
        <span className={styles.name}>Bulbasaur</span>
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
            <Tag name="yesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyes"/>
            <Tag name="yes"/>
            <Tag name="yes"/>
            <Tag name="yes"/>
            <Tag name="yes"/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default PokemonCard
