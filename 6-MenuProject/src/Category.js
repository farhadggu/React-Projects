import React from 'react'
import styles from "./Category.module.css"

function Category({ filterItems, categories }) {
  return (
    <div className={styles.categoryContainer}>
      {
        categories.map((category, index) => {
          return (
            <button key={index} onClick={() => filterItems(category)}>{category}</button>
          )
        })
      }      
    </div>
  )
}

export default Category