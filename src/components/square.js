import React, { useContext } from "react";
import { GameContext } from "./GameContext.js";

function Square({ value, index }) {
  const { squares, setSquares, isXNext, setIsXNext, whoIsWinner } =
    useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    if (whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}

export default Square;
