import React, { useState } from "react";

function Team (props) {
    const [ shot, setShot ] = useState(0);
    const [ goal, setGoal ] = useState(0);

    const handleShot = () => {
        setShot(prev => prev + 1);
        setGoal(prev => prev + (Math.random()> props.goalChance ? 1 : 0));
    }
    
    return (
        <div className="team">
            <div className="team-info">
                <h1>{props.name}</h1>
                <img src={props.logo} className="logo" alt="soccer team logo"/>
            </div>
            <div className="team-stats">
                <h1>GOAL: {goal}</h1>
                <h1>Shots: {shot}</h1>
                <button onClick={handleShot}>Shoot</button>
            </div>
        </div>
    )
}

export default Team;