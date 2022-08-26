import React from 'react';

const TravelCard = (props) =>{
    return(
        <div className="travel-component">
            <img src={`./images/${props.images}`} alt="card-pix" className="card-pix grow" />
            <div className="texts">
                <h4><img src="./images/airbnb.jpg" alt="" className="locion"/><span></span>{props.country}</h4>
                <h1>{props.location}</h1>
                <p>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
export default TravelCard;