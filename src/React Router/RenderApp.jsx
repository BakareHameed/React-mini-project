import React from 'react';
import './render.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';

const RenderApp = () =>{
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
            </div>
            <Routes>
                <Route path='/' element={<SharedLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='profile' element={<Profile/>}/>
                    <Route path='*' element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RenderApp;