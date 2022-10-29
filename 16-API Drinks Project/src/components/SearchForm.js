import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'
import "./SearchForm.css"

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus()
  })

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <section className='section section-search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label>search your favorite cocktail</label>
          <input type='text' id='name' placeholder='Search Here...' ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm