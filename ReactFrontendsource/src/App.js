import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Admission from './Admission';
import Login from './Login';
import Home from './Home';



function App() {
  /*<img src={openadmn}></img>*/

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'  element={<Admission/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Home' element={<Home/>}/>
    </Routes>
      </BrowserRouter>
  );
}

export default App;
