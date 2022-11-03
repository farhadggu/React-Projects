import React, { createContext, useContext, useState } from 'react'
import useFetch from './components/useFetch';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_ACCESS_KEY}`
const AppContext = createContext();


const AppProvider = ({children}) => {

    const [query, setQuery] = useState('batman')
    const {isLoading, error, data:movies} = useFetch(`&s=${query}`)
    

  return (
    <AppContext.Provider value={{isLoading, error, movies, query, setQuery}}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext }