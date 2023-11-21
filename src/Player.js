import ActionButton from './actionButton'
import { useState, useEffect } from 'react';
import ControlBtn from './controlBtn';


function Player(props) {


    const firstNum = Math.floor(Math.random() * 100);

    const [currentNun, setNum] = useState(firstNum);

    const [myScore, setScore] = useState(0);

    const [allPlayers, setAllPlayers] = useState(props.players);

    const [defaultStyle, setUserScreenStyle] = useState({ backgroundColor: "green" });

    let exitPlayers =props.exitPlayers;
    

    const checkIfExit = (playerId) => {
        let isInAraay = false;
        exitPlayers.map((exit, key) => { playerId === exit ? isInAraay = true : isInAraay = false; });
        return isInAraay;
    }


    const I_AmActive = () => {
        return allPlayers[props.id].active;
    }

    const sendToLocal = () => {
        console.log(222222);
        let storedPlayers = JSON.parse(localStorage.getItem("users"));
        if (storedPlayers == null) { storedPlayers = [] }

        let isInLocal = false;
        storedPlayers.map((player, key) => {
            if (player.name === allPlayers[props.id].name) {
                storedPlayers[key].gold++; isInLocal = true;
                localStorage.setItem("users", JSON.stringify(storedPlayers)); return
            }
        });
        if (!isInLocal) {
            allPlayers[props.id].gold++;
            storedPlayers.push(allPlayers[props.id]);
            localStorage.setItem("users", JSON.stringify(storedPlayers));
        }
    }

    const exitStyle = () => { setUserScreenStyle({ display: "none" }) }



    const checkNext = () => {
        console.log(props.id, allPlayers);
        let i;
        let length = allPlayers.length;
        for (i = (props.id + 1) % length; i < length; i = (i + 1) % length) {
            if (!allPlayers[i].winner && !checkIfExit(i)) {
                allPlayers[props.id].active = false;
                allPlayers[i].active = true; return;

            }

        }
    }

    const exitFunc = (array) => {
        if (allPlayers[props.id].active) { checkNext(); }
        exitStyle();
       array.push(props.id); exitPlayers=array; console.log(exitPlayers);
    }


    useEffect(() => {
        if (currentNun == 100) {
            setAllPlayers([...allPlayers, allPlayers[props.id].winner = true]);
            setUserScreenStyle({ backgroundColor: "white" });
            let firsrWinner = 0;
            allPlayers.map((player, key) => { if (player.winner) firsrWinner++ })
            if (firsrWinner == 1) { sendToLocal() }
        };
    }, [currentNun])

    useEffect(() => {
        let countwinners = 0; allPlayers.map((Player, index) => { if (Player.winner == true) countwinners++; })
        if (countwinners == allPlayers.length - 1) { props.done() }
    }, [allPlayers])

    return (



        <div className='UserScreen' style={defaultStyle}>

            <h2> {allPlayers[props.id].name} </h2>

            <div>
                <h1>{currentNun}</h1></div>
            < ControlBtn onclick={(event) => {


                if (I_AmActive()) {
                    console.log("nh");
                    setScore(myScore + 1);
                    setNum(Math.floor(eval(currentNun + event.target.innerText)));
                    checkNext(); console.log(exitPlayers);
                }




            }} />

            <h2>{myScore}</h2>

            <h3>🏆 :{allPlayers[props.id].gold}</h3>

            <br></br>
            
            <button type='button' onClick={() => { exitFunc(exitPlayers) }}>Exit</button>


        </div>
    )
}

export default Player;