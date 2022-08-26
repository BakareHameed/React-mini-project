import React from 'react';
import phototgrid from '../images/hokage.jpg'

const Hero = () => {
    return(
        <section className="hero">
            <img src={phototgrid} alt="photogrid" className="hero-photo"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by 
                one-of-a-kind hosts-all without leaving home.
            </p>
        </section>
    )
}
export default Hero;