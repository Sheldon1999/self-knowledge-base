import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/img/C-DAC-SIEM_logo_Final.png';
import Search from './Search';

const Header = () => {
  return (
    <nav>
        <img
            src={ logo }
            alt='Logo'
        />

        <Search />

        <FaUserCircle />
    </nav>
  )
}

export default Header