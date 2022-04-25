import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.scss'

const MovieCard = ({ title, year, poster, type, imdbid }) => {
  return (
    <div className='card-item'>
      <Link to={`/movie/${imdbid}`} >
        <div className='card-inner'>
          <div className='card-top'>
            <img src={poster} alt='title' />
          </div>
          <div className='card-bottom'>
            <div className='card-info'>
              <h4>{title}</h4>
              <p>{year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard
