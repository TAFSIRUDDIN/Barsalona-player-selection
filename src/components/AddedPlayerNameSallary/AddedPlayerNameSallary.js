import React from 'react';

const AddedPlayerName = (props) => {
    // const addedPlayerName = props.addPlayer.name;
    // const addedPlayerSallary = props.addPlayer.sallary;
    const {name, sallary} = props.addPlayer;
    return (
        
            // <li>{addedPlayerName}</li>
            
                <tr>
                    <td>{name}</td>
                    <td>$ {sallary}</td>

                </tr>
            

        
    );
};

export default AddedPlayerName;