import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/img/C-DAC-SIEM_logo_Final.png';

const Header = () => {
  return (
    <nav className='flex justify-between'>
        <img
            src={ logo }
            alt='Logo'
        />

        <input
            name='searchInput'
            placeholder='search items here...'
        />

        <FaUserCircle />
    </nav>
  )
}

export default Header