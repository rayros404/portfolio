import styles from "../../styles/Projects/Pokedex/Tag.module.css"

const Tag = (props) => {
  return (
    <div className={styles.tag}>
      {props.name}
    </div>
  )
}

export default Tag