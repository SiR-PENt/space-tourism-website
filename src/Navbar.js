import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from './logo.svg';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const [showLinks, setShowLinks] = useState(false);
     
    return (
        <header>  
        <img src={logo} alt='logo' className='img-logo'/>
        <div className='btn-container'>
        <button className='open-nav'>{/* nav-toggle function(onClick ={() => setShowLinks(!showLinks)}) missing*/}
        <FaBars className='bars'/>
        </button>  
        </div>    
        </header>
    )
}

export default Navbar
