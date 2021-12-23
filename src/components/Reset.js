import React, { useContext } from 'react';
import {GameContext} from "./GameContext.js"

function Reset(){
    const {setSquares,setIsXNext,setWhoIsWinner} = useContext(GameContext);

    function handleClick(){
        setSquares(Array(9).fill(null));
        setIsXNext(true);
        setWhoIsWinner('');
    }
    
    return (<p className='reset'>
        <button type="button" onClick={handleClick}>Reset</button>
    </p>)
}

export default Reset