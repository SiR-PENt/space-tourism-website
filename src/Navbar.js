import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './logo.svg';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const [showLinks, setShowLinks] = useState(false);
     
    return (
        <header>  
        <img src={logo} alt='logo' className='img-logo'/>
        <div className='btn-container'>
        <button className='nav-toggle'>{/* nav-toggle function(onClick ={() => setShowLinks(!showLinks)}) missing*/}
        <FaBars className='bars'/>
        </button>  
        </div>    
        </header>
    )
}

export default Navbar
