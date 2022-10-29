//Library Import
import React, { useEffect } from 'react'
//Local Import
import "./Alert.css"

const Alert = ({type, msg, removeAlert, list}) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list])

  return (
    <div className='alert-info'>
      <p className={`content-${type}`}>{msg}</p>
    </div>
  )
}

export default Alert