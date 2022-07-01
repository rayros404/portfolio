import styles from "../../styles/Projects/Pokedex/PokemonCard.module.css"
import Image from "next/image"
import AddTag from "./AddTag"
import Tag from "./Tag"
import { useEffect, useState, memo } from "react"
import Link from "next/link"


const PokemonCard = memo((props) => {
  const [tags, setTags] = useState()
  const [showTags, setShowTags] = useState(false)
  
  useEffect(() => {
    setTags(props.tags.slice(1).map(tag => (
      <Tag 
        key={tag}
        name={tag}
      />
    )))

  }, [props.tags])


  const toggleShow = () => {
    setShowTags(prevShowTags => !prevShowTags)
  }
  const openShow = () => {
    setShowTags(true)
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

  if (tags) {
   return (
     <div className={styles.cardWrapper}>
      <Link href={props.route}>
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
      </div>
      </Link>
        <div className={styles.tags}>
          <AddTag 
            entryNumber={props.entryNumber}
            openShow={openShow}
            setNewTag={props.setNewTag}
          />
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
    return <></>
  }
})

PokemonCard.displayName = "PokemonCard"

export default PokemonCard
