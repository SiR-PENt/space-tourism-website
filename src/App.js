import React, {Fragment} from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';
import Error from './Error'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
 return <Router>
     <Fragment>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>

      <Route path='/destination' element={<Destination/>}/>

       <Route path='/crew' element={<Crew/>}/>

       <Route path='/technology' element={<Technology/>}/>
       
       <Route path='*' element={<Error/>}/>
    </Routes>
    </Fragment>
  </Router>
}

export default App
