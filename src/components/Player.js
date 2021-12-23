import React, { useContext } from "react";
import { GameContext } from "./GameContext.js";

function Player() {
  const { isXNext } = useContext(GameContext);

  return <h1>Player: {isXNext ? "X" : "O"}</h1>;
}

export default Player;
