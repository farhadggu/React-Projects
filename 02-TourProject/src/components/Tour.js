import React, { useState } from 'react'
import styles from "./Tour.module.css"
import { shoretn } from './function'

function Tour({id, image, name, info, price, removeTour}) {

    const [readMore, setReadMore] = useState(false);

    return (
        <div className={styles.tourContainer}>
            <img src={image} alt={name} />
            <div className={styles.tourContent}>
                <div className={styles.tourContentTop}>
                    <h1>{name}</h1>
                    <span>{price} $</span>
                </div>
                <p>{readMore ? info : `${info.substring(0, 100)}...`}
                    <button onClick={() => setReadMore(!readMore)}>{readMore ? 'Show Less' : 'Read More'}</button>
                </p>
            </div>
            <button onClick={() => removeTour(id)} className={styles.tourButton}>Not Interested</button>
        </div>
    )
}

export default Tour