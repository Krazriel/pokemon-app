import React from 'react'
import pokeLogo from '../images/pokemon-logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <img className='img-logo' src={pokeLogo} alt='' />
        </div>
    </div>
    
  )
}

export default Header