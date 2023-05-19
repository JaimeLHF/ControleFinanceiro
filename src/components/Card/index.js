import React from "react";
import "./Card.css"


const Card = ({ title, value}) => {
    return (
        <div className="container">
            <header className="tittle_card">
                <p>{title}</p>
            </header>
            <span>{value}</span>
        </div>
    )
}

export default Card;