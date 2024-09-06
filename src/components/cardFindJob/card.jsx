
import React, { useState, useEffect } from "react";
import "./card.css"


function Card(prop) {
    

    return (
        <div className="card">
            <div>
                <img src={prop.data.src} alt="" />
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <h4>{prop.data.h4}</h4>
            <p className="name-gr">{prop.data.name}</p>
            <div>
                <p>1-3 Year</p>
                <p>Remote</p>
                <p>San Francisco, California</p>
            </div>
            <p className="bigp">We're a tight-knit group of engineers, editors, and creatives <br /> combining humans and technology to create a new model for <br /> digital publishing.</p>
            <div className="buttons-3">
                <button className="buttonn">App Design</button>
                <button className="buttonnn">Web Design</button>
                <button className="buttonnnn">Interaction Design</button>
            </div>
            <div>
                <h3><b>{prop.data.coin}</b></h3>
                <p>{prop.data.ago}</p>
            </div>

        </div>
    );
}

export default Card;