import React from 'react';
import Navbar from './Navbar';
const Home = () => {
    
    return (    
         <section className='home'>
         <Navbar/>
         <div className='desc'>
         <p>So, you want to travel to</p> <p>space</p>
         <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of the edge of it. Well sit back and relax because we'll give you a truly out of this world experience!
          </p>
        </div>
        
        <div className='explore'>
         <p>Explore</p>
         </div>
         </section>
        
        //  display grid on the body
    )
}

export default Home
