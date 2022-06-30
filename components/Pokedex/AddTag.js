import styles from "../../styles/Projects/Pokedex/AddTag.module.css"
import { useState, useEffect } from "react"


const AddTag = (props) => {
  const [currentTag, setCurrentTag] = useState("")

  const handleChange = (event) => {
    setCurrentTag(event.target.value)
  }

  const handleFocus = (event) => {
    setCurrentTag(event.target.value)
    props.openShow()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.setNewTag([currentTag, props.entryNumber])
    setCurrentTag("")

  }
  return (
    <form 
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input
        className={styles.input}
        name="addTag"
        type="text"
        placeholder="Add a tag"
        value={currentTag}
        onFocus={handleFocus}
        onChange={handleChange}
      />
    </form>
  )
}

export default AddTag