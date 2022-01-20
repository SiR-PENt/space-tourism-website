import React from 'react';
import {useState} from 'react';

const Destination = ({destination}) => {

    const [value, setValue] = useState(0);
    const { name, images, description, distance, travel} = destination[value];
    
    return (
        <section className='destination'>
            <p>01 pick your destination</p>
           <div className='body'>

           <div className='photo-container'>
               <img src={images.png} alt={name} className='photo'/>
            </div>

           <div className='info'>

           <ul>
            {destination.map((link, index) => {
            return (
            <li key={index} onClick={() => setValue(index)} className={`name ${index === value && 'underline' }`}>

             {link.name}
             </li>
            )})}
           </ul>

           <article>
             <p>{name}</p>  
             <p>{description}</p>
            </article> 

            <footer>
            <div className='distance'>
                <p>Avg. distance</p>
                <p>{distance}</p>
            </div>

            <div className='travel'>
                <p>est. time travel</p>
                <p>{travel}</p>
            </div>
            </footer>
            </div>   
            </div>
        </section>
    )
}

export default Destination;