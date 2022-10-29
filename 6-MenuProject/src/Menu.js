import React from 'react'
import styles from './Menu.module.css'

const Menu = ({items}) => {
  return (
    <div className={styles.articleContainer}>
        {items.map((menuItem) => {
            return (
                <article className={styles.menuArticle} key={menuItem.id}>
                    <img src={menuItem.img} alt='' />
                    <div className={styles.menuContent}>
                        <header className={styles.menuContentHeader}>
                            <h4>{menuItem.title}</h4>
                            <p>{menuItem.price}$</p>
                        </header>
                        <p className={styles.menuContentDesc}>{menuItem.desc}</p>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default Menu