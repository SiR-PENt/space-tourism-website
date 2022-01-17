import React, {Fragment} from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';
import Error from './Error'
import {useState} from 'react';
import data from './data'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const App = () => {
    const [tourData, setTourData] = useState(data);
 return <Router>
     <Fragment>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>

      <Route path='/destination' element={<Destination tourData={tourData.destinations}/>}/>

       <Route path='/crew' element={<Crew tourData={tourData.crew}/>}/>

       <Route path='/technology' element={<Technology tourData={tourData.technology}/>}/>

       <Route path='*' element={<Error/>}/>
    </Routes>
    </Fragment>
  </Router>
}

export default App
