import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'
import { BiCameraMovie } from 'react-icons/bi'
import user from '../../assets/image/user.gif'
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import {
  fetchAsyncMovies,
  fetchAsyncShows
} from './../../redux/redux-slice/movieSlice'

const Header = () => {
  const [term, setTerm] = useState('')
  const location = useLocation()
  const dispatch = useDispatch()
  const submitHandler = e => {
    e.preventDefault()
    if (term === '') {
      return alert('Search input cannot be empty')
    }
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm('')
  }
  const inputField = e => {
    setTerm(e.target.value)
  }
  return (
    <div className='header'>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <div className='logo'>{BiCameraMovie()}Movie App</div>
      </Link>
      {location.pathname !== '/' ? null : (
        <div className='search-bar'>
          <form onSubmit={submitHandler}>
            <input
              type='text'
              value={term}
              placeholder='Search Movie or Show'
              onChange={inputField}
            />
            <button type='submit'>
              <i>{BsSearch()}</i>
            </button>
          </form>
        </div>
      )}
      <div className='user-image'>
        <img src={user} alt='user' />
      </div>
    </div>
  )
}

export default Header
