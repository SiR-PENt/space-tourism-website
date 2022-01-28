import React from 'react'
import {useState} from 'react';
import Navbar from './Navbar';

const Technology = ({technology}) => {
    const [value, setValue] = useState(0);
    const {name, images, description} = technology[value];
  
    return (
        <section className='technology'>
          <Navbar/>
          <p><span className='number'>03</span>space header 101</p>

          <div className='body'>
            <div className='photo-container'>
             <img src={images.landscape} alt={name} className='photo'/>
            </div>
            <div className='info'>
             <div className='btn-container'>
            {technology.map((link,index) => {
                return <button key={index} className={`btn ${value === index && 'active'}`} onClick={()=> setValue(index)}>
                     {index + 1}
                </button>
            })}
             </div>
             <article>
                 <p>the terminology...</p>
                 <p>{name}</p>
                 <p>{description}</p>
             </article>
            </div>
          </div>
        </section>
    )
}

export default Technology;