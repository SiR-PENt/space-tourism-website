import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (    
         <main>
         <section className='home'>
          <aside className='aside'>
          <nav className='nav'>
            <button className='close-nav'>
                < FaTimes className='times'/>
            </button>
            <ul>

               <li><Link to='/' className='link' ><span className='number'>00</span> Home</Link></li>

              <li><Link to='/destination' className='link'><span className='number'>01</span> Destination</Link></li> 

               <li><Link to='/crew' className='link'><span className='number'>02</span> Crew</Link></li>   

                <li><Link to='/technology' className='link' ><span className='number'>03</span> Technology</Link></li>      
            </ul>
          </nav>
          </aside>
          
         <div className='desc'>
         <p>So, you want to travel to</p> <p>space</p>
         <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of the edge of it. Well sit back and relax because we'll give you a truly out of this world experience!
          </p>
        </div>
        
        <div className='explore'>
         <p>Explore</p>
         </div>
         </section>
         </main>
        
        //  display grid on the body
    )
}

export default Home
