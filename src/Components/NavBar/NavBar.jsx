import React from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-scroll'
import logo from '../Assets/logo.jpeg'

const NavBar = () => {
  return (
    <nav className='navbar'>
            <div className="navbar-logo">
                <img src={logo} alt="" />
                <h1>Phoenix Motors</h1>
                
            </div>
            <div className="navbar-links">
                <Link activeClass='active' to="home" spy ={true} smooth={true} offset ={-100} duration={500}  className="nav-link">Home</Link>
                <Link activeClass='active'spy={true} smooth={true} offset ={-100} duration={500} to="luxury" className="nav-link">Luxury Cars</Link>
                <Link activeClass='active'spy={true} smooth={true} offset ={-100} duration={500} to="sedans" className="nav-link">Sedans</Link>
                <Link activeClass='active'spy={true} smooth={true} offset ={-100} duration={500} to="suvs" className="nav-link">SUVs</Link>
                <Link activeClass='active'spy={true} smooth={true} offset ={-100} duration={500} to="trucks" className="nav-link">Trucks</Link>
                <Link activeClass='active'spy={true} smooth={true} offset ={-60} duration={500} to="contact" className="nav-link">Contact</Link>    
            </div>
            <hr />  
        </nav>   
         
  )
}

export default NavBar
