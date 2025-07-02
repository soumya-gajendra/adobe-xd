import React from 'react'
import Toyourdata from './toyourdata.jsx';
import Toyourdatas from './toyourdatas.jsx';
import Yourpage from './yourpage.jsx';
import Registered from './registered.jsx';
import { Routes , Route } from 'react-router-dom';
function App() {
 return (
    <>
    <Routes>
      <Route path="/" element={<Toyourdata/>}></Route>
      <Route path="/toyourdatas" element={<Toyourdatas/>}></Route>
      <Route path='/yourdata' element={<Yourpage></Yourpage>}></Route>  
      <Route path='/registereds'element={<Registered></Registered>}></Route>
      <Route path='/toyourdat' element={<Yourpage></Yourpage>}></Route>
    </Routes>
      </>
  )
}

export default App
