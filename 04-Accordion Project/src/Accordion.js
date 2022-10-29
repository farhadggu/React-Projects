import React, { useState } from 'react'
import styles from "./Accordion.module.css"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function Accordion({title, info}) {

    const [showInfo, setShowInfo] = useState(false);

    return (
        <article className={styles.accordionArticle}>
            <header>
                <h4>{title}</h4>
                <button onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> :  <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
}

export default Accordion