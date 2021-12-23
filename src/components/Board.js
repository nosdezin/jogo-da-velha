import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { GameContext } from "./GameContext.js";
import Player from "./Player.js";
import Reset from "./Reset.js";
import Square from "./square.js";
import calculateWinner from "./calculateWinner.js";
import Winner from "./Winner.js";

function Board() {
  const { squares, setWhoIsWinner } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      setWhoIsWinner(winner);
    }
  }, [squares]);

  return (
    <div className="board_container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
}

export default Board;
