import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context'

const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {

  const {movies, isLoading} = useGlobalContext();

  if (isLoading) {
    return <h1>Loading</h1>
  }

  return (
    <section className='movies'>
      {movies.map((movie) => {
        const { imdbID: id, Poster:poster, Title:title, Year:year } = movie
        return (
          <Link to={`/movie/${id}`} key={id} className="movie">
            <img src={poster === 'N/A' ? url : poster} alt={title} />
            <div className='movie-info'>
              <h4 className='title'>{title}</h4>
              <p>{year}</p>
            </div>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies
