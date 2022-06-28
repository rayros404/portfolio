import styles from "../../styles/Projects/Pokedex/AddTag.module.css"
import { useState, useEffect } from "react"


const AddTag = () => {
  return (
    <form 
      className={styles.form}
      // onSubmit={handleSubmit}
    >
      <input
        className={styles.input}
        name="addTag"
        type="text"
        placeholder="Add a tag"
        // value={currentTag}
        // onFocus={handleFocus}
        // onChange={handleChange}
      />
    </form>
  )
}

export default AddTag