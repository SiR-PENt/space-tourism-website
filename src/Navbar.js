import React from 'react';
import {FaBars} from 'react-icons/fa';
import logo from './logo.svg';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const [showLinks, setShowLinks] = useState(false);
     
    return (
        <header>
        <nav>
        <div className='nav-center'>
       <div className='nav-header'>
        <img src={logo} alt='logo'/>
        <button className='nav-toggle'>{/* nav-toggle function(onClick ={() => setShowLinks(!showLinks)}) missing*/}
        <FaBars/>
        </button>
        </div> 
        <div className='links-container'>
        <ul className='links'>
        <li><Link to="/">00 Home</Link></li>
        <li><Link to="/destination">01 Destination</Link></li>
        <li><Link to="/Crew">02 Crew</Link></li>
        <li><Link to ="/Technology">03 Technology</Link></li>
        </ul>    
        </div>
        </div>
         </nav>   
        </header>
    )
}

export default Navbar
