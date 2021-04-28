import logo from './logo.svg';
import './App.css';
import allPlayersData from './data/data.json'
import Players from './components/players/Players';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react';
import PlayerList from './components/playerList/PlayerList';


function App() {
  // console.log(player);

  const [ allPlayer, setAllPlayer] = useState([]);
  const [ allPlayers, setAllPlayers] = useState([]);
        useEffect(() => {
          setAllPlayers(allPlayersData);
          
        },[])

  // console.log(allPlayer);
  
  const addPlayer = (playerDetailes) => {
    let item = allPlayer.indexOf(playerDetailes);
    let teamLength = allPlayer.length;
    if (teamLength < 11) {
      if (item === -1) {
        const newAllPlayer = [...allPlayer, playerDetailes];
        setAllPlayer(newAllPlayer);
      }
      else{
        alert("Already Added")
      }
    }
    else{
      alert("Team is full")
    }
  }




  const removePlayer = (playerDetailes) => {
    // console.log(persionDetails);
    let item = allPlayer.indexOf(playerDetailes);
    if (item === -1) {
      alert(" Didnot added ")
    }

    else{
      const playerRemove = (arr, value) => { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }
    const allPlayerAfter =playerRemove(allPlayer, playerDetailes);
    setAllPlayer(allPlayerAfter);
    }

  }

  


  // console.log(allPlayer);


  return (
    <div>
      <div className="App">
        <PlayerList allPlayer={allPlayer}></PlayerList>
      </div>
      <div className="App player-card-body">

        {
          allPlayers.map(pl => <Players key={pl.id} removePlayer={removePlayer} addPlayer={addPlayer} allPlayers={pl}></Players>)
        }


      </div>
    </div>
  );
}

export default App;
