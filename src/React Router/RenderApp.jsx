import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import SharedLayout from './components/SharedLayout';
import '../React Router/render.css';
import Error from './pages/Error';
import Product from './pages/Product';

const RenderApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path='Contact' element={<Contact />}/>
          <Route path='About' element={<About/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='Product' element={<Product/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RenderApp