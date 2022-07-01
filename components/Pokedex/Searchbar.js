import styles from "../../styles/Projects/Pokedex/Searchbar.module.css"

const Searchbar = (props) => {
  return (
      <input
        className={styles.searchbar}
        name={props.name}
        type="text"
        placeholder={`Search by ${props.name}`}
        value={props.value}
        onChange={props.handleChange}
      />
  )
}

export default Searchbar