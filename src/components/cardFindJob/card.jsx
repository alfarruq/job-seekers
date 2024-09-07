
import React, { useState, useEffect } from "react";
import "./card.css"


function Card(prop) {
    

    return (
        <div className="card">
            <div className="display">
                <img src={prop.data.src} alt="" />
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <h3><b>Sr. UI/UX Web Designer</b></h3>
            <p className="name-gr">{prop.data.name}</p>
            <div className="displayss">
                <p className="plar-3">1-3 Year</p>
                <p className="plar-3">Remote</p>
                <p className="plar-3">San Francisco, California</p>
            </div>
            <p className="bigp">We're a tight-knit group of engineers, editors, and creatives <br /> combining humans and technology to create a new model <br />for  digital publishing.</p>
            <div className="buttons-3">
                <button className="buttonn">App Design</button>
                <button className="buttonnn">Web Design</button>
                <button className="buttonnnn">Interaction Design</button>
            </div>
            <div className="displays">
                <h3><b>{prop.data.coin}</b></h3>
                <p className="color-p">{prop.data.ago} hours ago</p>
            </div>

        </div>
    );
}

export default Card;