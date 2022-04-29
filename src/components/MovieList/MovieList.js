import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../redux/redux-slice/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.scss'
import { getAllShows } from './../../redux/redux-slice/movieSlice'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from '../../assets/settings'
import { Metronome } from '@uiball/loaders'

const MovieList = () => {
  const allMovies = useSelector(getAllMovies)
  const allShows = useSelector(getAllShows)
  const center = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  }
  return (
    <div>
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2>Movies</h2>
          <div className='movie-container'>
            {allMovies.length === 0 ? (
              <div style={center}>
                <Metronome size={40} lineWeight={5} speed={2} color='orange' />
              </div>
            ) : (
              <Slider {...settings}>
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
              </Slider>
            )}
          </div>
        </div>
      </div>
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2>Shows</h2>
          <div className='movie-container'>
            {allShows.length === 0 ? (
              <div style={center}>
              <Metronome size={40} lineWeight={5} speed={2} color='orange' />
              </div>
            ) : (
              <Slider {...settings}>
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
              </Slider>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieList
