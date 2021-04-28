import React from 'react';
import AddedPlayerNameSallary from '../AddedPlayerNameSallary/AddedPlayerNameSallary';

import'./PlayerList.css';

const PlayerList = (props) => {
    console.log(props)
    const addedPlayersData = props.allPlayer;
    console.log(addedPlayersData)
let totalCoasts = 0;
    for (let i = 0; i < addedPlayersData.length; i++) {
        const element = addedPlayersData[i];
        totalCoasts = totalCoasts + element.sallary;
        
    }
    const totalPlayerNumber = addedPlayersData.length;
    return (
        <div className="main-table">
            <h1 style={{paddingBottom: '20px',paddingTop: '20px'}}>Total player number in a match:{totalPlayerNumber}</h1>
            
            <table className="table">
                <tr>
                    <th>Player Name</th>
                    <th>Sallary/Match</th>
                </tr>
                
                    
                    {
                    addedPlayersData.map((addPlayer) => <AddedPlayerNameSallary key={addPlayer.id} addPlayer={addPlayer}></AddedPlayerNameSallary>)
                    }
                    
                
              
            </table>
            <h3 style={{paddingBottom: '40px',paddingTop: '10px', margin: '0'}}>Total coast in a match: $ {totalCoasts}</h3>
        </div>
    );
};

export default PlayerList;