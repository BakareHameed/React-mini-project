import React from 'react';
import AnimeData from './AnimeData';
import './Anime.css';
import Navbar from './Navbar';
import TravelCard from './TravelCard';

const Card =() =>{
    const data = AnimeData.map(items=>{
        return <TravelCard
            images = {items.images}
            title = {items.title}
            location = {items.location}
            startDate = {items.startDate}
            endDate = {items.endDate}
            country = {items.country}
            description = {items.description}
        />
    })

    return (
        <div>
            <Navbar 
            />
            {data}
        </div>
    )
}

export default Card;