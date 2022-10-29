import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Tour from './Tour';
import styles from "./Tours.module.css"

const url = 'https://course-api.com/react-tours-project'

function Tours() {
    const [loading, SetLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        const response = await fetch(url);
        const tours = await response.json();
        setTours(tours)
        SetLoading(false);
    }

    useEffect(() => {
        fetchTours();
    }, [])

    const removeTour = (id) => {
        const newTour = tours.filter(tour => tour.id !== id)
        setTours(newTour)
    }

  if (loading) {
    return <main>
            <Loading />
        </main>
  }

  if (tours.length === 0) {
    return(
        <main>
            <div className={styles.noTour}>
                <h1 className={styles.mainHeading}>
                    No Tours Left
                </h1>
                <button onClick={fetchTours}>Refresh</button>
            </div>
        </main>
    )
  }

  return (
    <main>
        <h1 className={styles.mainHeading}>Our Tours</h1>
        {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
    </main>
  )
}

export default Tours