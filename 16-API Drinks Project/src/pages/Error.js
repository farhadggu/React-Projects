import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.css"

const Error = () => {
  return (
    <section className='error-page'>
      <div className='error-container'>
        <h1>oops page not found !</h1>
        <Link to='/' className='btn btn-primary'>back home</Link>
      </div>
    </section>
  )
}

export default Error