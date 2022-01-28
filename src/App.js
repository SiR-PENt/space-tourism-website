import React, {Fragment} from 'react';
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';
import Error from './Error'
import data from './data'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {

 return <Router>
     <Fragment>
     <Routes>
      <Route exact path='/' element={<Home/>}/>

      <Route path='/destination' element={<Destination destination={data.destinations}/>}/>

       <Route path='/crew' element={<Crew crew={data.crew}/>}/>

       <Route path='/technology' element={<Technology technology={data.technology}/>}/>

       <Route path='*' element={<Error/>}/>
    </Routes>
    </Fragment>
  </Router>
}

export default App
