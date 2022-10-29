import React, { useState } from 'react'
import data from "./Data"
import Person from './Person'
import styles from "./Birthday.module.css"

function Birthday() {

    const [people, setPeople] = useState(data);
    console.log(data)

  return (
        <main className={styles.main}>
            <section className={styles.birthdayBox}>
                <div className={styles.birthdayCard}>
                    <h1>{people.length} Birthdays Today</h1>
                    <Person people={people} />
                    <button onClick={() => setPeople([])}>Clear All</button>
                </div>
            </section>
        </main>
  )
}

export default Birthday