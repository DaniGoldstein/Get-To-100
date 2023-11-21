import ActionButton from './actionButton'
import { useState } from 'react';
import ControlBtn from './controlBtn';


function UserScreen(props) {


    const firstNum = Math.floor(Math.random() * 100);

    const [curentNun, setNum] = useState(firstNum);

    const [myScore, setScore] = useState(0);

    const details = {
        name: props.name,
        id: props.id,
        active: props.id === props.counter,
        score: myScore
    }

    function winner() {
        return curentNun == 100;
    }

    return (<>
        <div className='UserScreen'>

            <h2> {details.name} </h2>

            <div>
                <h1>{curentNun}</h1></div>
            < ControlBtn onclick={(event) => {
                props.checkWinner(details.id);
                if (details.active) {
                    props.setCounter();
                    setScore(myScore + 1);
                    setNum(Math.floor(eval(curentNun + event.target.innerText)))
                    console.log(curentNun);
                }
                if (curentNun == 100) { props.addWinner(details.id) };
                console.log(props.counter);




            }} />

            <h2>{myScore}</h2>



        </div>
     
    </>

    )
}

export default UserScreen; 