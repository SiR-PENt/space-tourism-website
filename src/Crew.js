import React from 'react'
import { useState } from 'react';
const Crew = ({crew}) => {
    const [value, setValue] = useState(0);
      const {name, images, role, bio} = crew[value];
    return (
        <section className='crew'>
         <p><span className='number'>02</span> Meet your crew</p>  
         <div className='body'>
         <div className='photo-container'>
          <img src={images.png} alt={name} className='photo'/>
         </div> 
         <section className='info'>
           <div className='btn-container'>
            {crew.map((link,index) => {
                return <button onClick={() => setValue(index)} key={index} className={`btn ${index === value && 'active'}`}></button>
            })}   
            </div>

               <article>
                <p>{role}</p>
                <p>{name}</p>
                <p>{bio}</p>
                </article>  
         </section> 
         </div>  
        </section>
    )
}

export default Crew