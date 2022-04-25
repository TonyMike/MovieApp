import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { BiCameraMovie } from "react-icons/bi";
import user from '../../assets/image/user.gif'


const Header = () => {
  return (
    <div className='header'>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <div className='logo'>{BiCameraMovie()}Movie App</div>
      </Link>
      <div className='user-image'>
        <img src={user} alt='user' />
      </div>
    </div>
  )
}

export default Header
