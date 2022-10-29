import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import data from "./Data"
import styles from "./Reviews.module.css"

function Reviews() {

    const [index, setIndex] = useState(0);
    const {name, job, image, text} = data[index];

    const checkNumber = number => {
        if (number > data.length - 1) {
            return 0;
        }

        if (number < 0) {
            return data.length - 1;
        }

        return number
    }

    const nextIndex = () => {
        setIndex((index) => {
            const newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    const prevIndex = () => {
        setIndex((index) => {
            const newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * data.length);
        if (randomNumber === index) {
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber));
    }

  return (
    <div className={styles.reviewsContainer}>
        <img src={image} alt='person' />
        <span className={styles.reviewQuote}><FaQuoteRight /></span>
        <div className={styles.reviewContent}>
          <h3>{name}</h3>
          <p className={styles.reviewContentJob}>{job}</p>  
          <p className={styles.reviewContentDesc}>{text}</p>
        </div>
        <div className={styles.reviewArrows}>
          <FaChevronLeft onClick={prevIndex} />
          <FaChevronRight onClick={nextIndex} />
        </div>
        <button onClick={randomPerson}>Suprise Me</button>
    </div>
  )
}

export default Reviews;