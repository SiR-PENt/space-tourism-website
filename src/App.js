import React, {Fragment} from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';
import Error from './Error'
import data from './data'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useEffect} from 'react';


const App = () => {

 const useGlobalContext = () => {
    return useEffect(() => console.log(window.location.href), []);
 }
  useGlobalContext(); 
 return <Router>
     <Fragment>
     <Navbar/>
     <Routes>
      <Route exact path='/' element={<Home globalContext={useGlobalContext}/>}/>

      <Route path='/destination' element={<Destination destination={data.destinations} globalContext={useGlobalContext}/>}/>

       <Route path='/crew' element={<Crew crew={data.crew} globalContext={useGlobalContext}/>}/>

       <Route path='/technology' element={<Technology technology={data.technology} globalContext={useGlobalContext}/>}/>

       <Route path='*' element={<Error/>}/>
    </Routes>
    </Fragment>
  </Router>
}

export default App
