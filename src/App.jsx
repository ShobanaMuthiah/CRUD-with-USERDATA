import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

const App = () => {
  const [id,setId]=useState(0)
  return (
    <div>
      
      <BrowserRouter>
      <div>
        <Nav/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product setId={setId}/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit id={id}/>}/>
      </Routes>
      <div>
        <Footer/>
      </div>
      </BrowserRouter>
    </div>
  );
};


export default App;