import React, { useEffect } from 'react'
import MovieList from './../MovieList/MovieList'
import { useDispatch } from 'react-redux'
import { fetchAsyncShows } from '../../redux/redux-slice/movieSlice'
import { fetchAsyncMovies } from './../../redux/redux-slice/movieSlice'

const Home = () => {
  const dispatch = useDispatch()
  const movieText = 'harry'
  const showText = 'friends'
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch])
  return (
    <div>
      <div className='banner-img'></div>
      <MovieList />
    </div>
  )
}

export default Home
