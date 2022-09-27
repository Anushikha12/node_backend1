import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
          <ul className='navbar navbar-collapse'>
            <i className='fas fa-bars checked'></i>
            <Link to='/' className='item'>Home</Link>
            <Link to='/bollywood' className='item'>Bollywood</Link>
            <Link to='/technology' className='item'>Technology</Link>
            <Link to='/hollywood' className='item'>Hollywood</Link>
            <Link to='/fitness' className='item'>Fitness</Link>
            <Link to='/food' className='item'>Food</Link>
          </ul>
        </nav>
  )
}

export default Navbar