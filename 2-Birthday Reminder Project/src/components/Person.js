import React from 'react'
import styles from "./Person.module.css"

function Person({people}) {
  return (
    <>
        {people.map((person) => {
            return (
                <div className={styles.birthdayPerson} key={person.id}>
                    <img src={person.image} alt='person' />
                    <div>
                        <p>{person.name}</p>
                        <span>{person.age} years</span>
                    </div>
                </div>
            )
        })}
        
    </>
  )
}

export default Person