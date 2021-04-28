import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    // console.log(props);
    const playerData = props.allPlayers;
    const { image, name, sallary, email} = props.allPlayers;
    return (
        
        <div className="main-players">
            <img src={image} alt="" srcset=""/>
            <h2>{name}</h2>
            <p> <small>{email}</small> </p>
            <h4>Sallary: $ {sallary}</h4>
            <button onClick={() =>props.addPlayer(playerData)} className="btn btn-success"><FontAwesomeIcon icon={faUserPlus} /> Add Player</button> <br/> <br/>
            <button onClick={() =>props.removePlayer(playerData)} className="btn btn-success"><FontAwesomeIcon icon={faUserMinus} /> Remove Player</button>
            
            
        </div>
        
    );
};

export default Players;