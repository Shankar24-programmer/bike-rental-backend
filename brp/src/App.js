import React from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import All from './Components/All'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Components/Signup'
import Filter from './Components/Filter'
import HomeScreen from './screens/HomeScreen'
import Cart from "./Components/Cart"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<All/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/filter" element={<Filter/>}/>
      <Route path="/bikesd" element={<HomeScreen/>}/>
      <Route path="/cart" element={<Cart />}/>

      

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
