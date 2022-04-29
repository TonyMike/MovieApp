import React from 'react'
import errorImg from '../../assets/image/pageError.svg'
import './NotFound.scss'

const NotFound = () => {
  return (
    <div className="error">
      <img src={errorImg} alt="error" />
      <p className="error-msg">Page not Found</p>
    </div>
  )
}

export default NotFound