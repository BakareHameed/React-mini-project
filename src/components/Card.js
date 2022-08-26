import React from 'react';
// import icon from "../images/icon-reminders.svg";
import star from "../images/redstar.jpg"

const Card = (props) => {
    let badgeText;
    if(props.OpenSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="Card-component tc dib ma4 grow bw2'">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} alt="card" className="card-image"/>
            <div className="card-stats">
                <img src={star} alt="" height="50px" width="20px" className="card-star"/>
                <span>{props.stats.rating}.0</span>
                <span className="grey">{props.stats.reviewCount}</span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.price}</span> per person</p>
        </div>
    )
}

export default Card;