import React, { useContext } from "react";
import { GameContext } from "./GameContext.js";

function Winner() {
  const { whoIsWinner } = useContext(GameContext);

  if (!whoIsWinner) return <></>;
  return <p className="winner">{whoIsWinner} ganhou!</p>;
}

export default Winner;
