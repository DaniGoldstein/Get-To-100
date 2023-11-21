import Player from "./Player"
import { useEffect, useState } from "react";
import AddPlayer from "./addPlayer";
import WinnersTable from './localWin';
function AppGame() {



    let [myPlayers, setMyPlayers] = useState([]);
    let [gameScreenStyle, setToDone] = useState({ backgroundColor: "yellow" });
    let exitPlayers = [];
    
    const[allId,SetAlliD]=useState([]);

    useEffect(()=>{myPlayers.map((player,key)=>{SetAlliD([...allId,key]) }); console.log(allId);},[myPlayers]);

    const doneStyle = () => { setToDone({ backgroundColor: "red", pointerEvents: "none" }) }
    

    const startgame = (arr) => {
        setMyPlayers(...myPlayers, arr); console.log(myPlayers);
    };



    return (<>

        <AddPlayer startgame={startgame} />

        <div className="gameScreen" style={gameScreenStyle}>

            {myPlayers && myPlayers.map((player, key) => <Player
                players={myPlayers}
                id={key}
                done={doneStyle}
                exitPlayers={exitPlayers}

            />)}

        </div>
        <div>
            <WinnersTable />
        </div>
    </>
    )

}
export default AppGame;