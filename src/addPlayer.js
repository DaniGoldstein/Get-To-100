import { useState } from "react";

function AddPlayer(props) {

    let myLocalPlayers=JSON.parse(localStorage.getItem("users"))
   if( myLocalPlayers==null)myLocalPlayers=[]

    const [players,setPlayers] = useState([]);

    const [addedName, setname] = useState("");

    

    function newPlayer(name) {
        
 const player = {
            name: name,
            active:players.length==0?true:false,
            winner: false,
            gold: 0,
            silver: 0,
        }
        
myLocalPlayers.map((myPlayer,key)=>{if(myPlayer.name===name){console.log(myLocalPlayers);
    player.gold=myPlayer.gold;
}
})
        

       
       setPlayers([...players,player]);
    }

    return (

        <div className="AddPlayer">

            <input type="text" placeholder="Name" onChange={(event) => { setname(event.target.value) }} id="inputName" />
            <button type="submit" onClick={() => {
                
                if(players.length==5){alert("maximum 5 players"); return}
                document.getElementById("inputName").value = '';
                newPlayer(addedName)
                 console.log(players)
            }}
            >Enter player</button>

            <br></br>
            

            <button onClick={() => {if(players.length<2){alert("minimum 2 players");return;} props.startgame(players); 
            }}>
                Start Game
            </button>
            <button onClick={()=> window.location.reload()} > New Game</button>


        </div>

    )


}
export default AddPlayer;
