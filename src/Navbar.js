import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './logo.svg';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   const [showLinks, setShowLinks] = useState(false);
     console.log(window.location.href);
    return (
        <header>  
        <img src={logo} alt='logo' className='img-logo'/>
        <div className='btn-container'>
        <button onClick={() => setShowLinks(true)}className='open-nav'>{/* nav-toggle function(onClick ={() => setShowLinks(!showLinks)}) missing*/}
        <FaBars className='bars'/>
        </button>  
        </div>
         <aside className={`aside ${showLinks &&'show-links'}`}>
          <nav className='nav'>
            <button onClick={() => setShowLinks(false)} className='close-nav'>
                < FaTimes className='times'/>
            </button>
            <ul className='nav-links'>

               <li><Link to='/' className='link' ><span className='number'>00</span> Home</Link></li>

              <li><Link to='/destination' className='link'><span className='number'>01</span> Destination</Link></li> 

               <li><Link to='/crew' className='link'><span className='number'>02</span> Crew</Link></li>   

                <li><Link to='/technology' className='link' ><span className='number'>03</span> Technology</Link></li>      
            </ul>
          </nav>
          </aside>    
        </header>
    )
}

export default Navbar;
