import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { MovieOrShowDetail } from '../../redux/redux-slice/movieSlice'
import {
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow
} from './../../redux/redux-slice/movieSlice'
import './MovieDetail.scss'
import { FaCalendar, FaFilm, FaStar, FaThumbsUp } from 'react-icons/fa'

const MovieDetail = () => {
  const dispatch = useDispatch()
  const { imdbID } = useParams()
  const movieDetails = useSelector(getSelectedMovieOrShow)
  useEffect(() => {
    dispatch(MovieOrShowDetail(imdbID))
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID])
  return (
    <div className='movie-section'>
      {Object.keys(movieDetails).length === 0 ? (
        'loading'
      ) : (
        <>
          <div className='section-left'>
            <div className='movie-title'>{movieDetails.Title}</div>
            <div className='movie-rating'>
              <span>
                IMDB Rating <i className='fa fa-star'>{FaStar()}</i>: &nbsp;
                {movieDetails.imdbRating}{' '}
              </span>
              <span>
                IMDB Votes <i className='fa fa-thumbs'>{FaThumbsUp()}</i> :{' '}
                {movieDetails.imdbVotes}
              </span>
              <span>
                Runtime <i className='fa fa-film'>{FaFilm()}</i> :{' '}
                {movieDetails.Runtime}
              </span>
              <span>
                Year <i className='fa fa-calender'>{FaCalendar()}</i> :{' '}
                {movieDetails.Year}
              </span>
            </div>
            <div className='movie-plot'>{movieDetails.Plot}</div>
            <div className='movie-info'>
              <div>
                <span>Director</span>
                <span>{movieDetails.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{movieDetails.Actors}</span>
              </div>
              <div>
                <span>Genre</span>
                <span>{movieDetails.Genre}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{movieDetails.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{movieDetails.Awards}</span>
              </div>
            </div>
          </div>
          <div className='section-right'>
            <img src={movieDetails.Poster} alt={movieDetails.Title} />
          </div>
        </>
      )}
    </div>
  )
}

export default MovieDetail
