import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../redux/redux-slice/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.scss'
import { getAllShows } from "./../../redux/redux-slice/movieSlice";

const MovieList = () => {
  const allMovies = useSelector(getAllMovies)
  const allShows = useSelector(getAllShows)
  // console.log(allMovies);
  return (
  <div>
      <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          {allMovies.map((movie, id = 1) => {
            const { Poster, Title, Type, Year, imdbID } = movie
            return (
              <MovieCard
                key={id++}
                title={Title}
                year={Year}
                poster={Poster}
                type={Type}
                imdbid={imdbID}
              />
            )
          })}
        </div>
      </div>
    </div>
        <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Shows</h2>
        <div className='movie-container'>
          {allShows.map((movie, id = 1) => {
            const { Poster, Title, Type, Year, imdbID } = movie
            return (
              <MovieCard
                key={id++}
                title={Title}
                year={Year}
                poster={Poster}
                type={Type}
                imdbid={imdbID}
              />
            )
          })}
        </div>
      </div>
    </div>
  </div>
  )
}

export default MovieList
