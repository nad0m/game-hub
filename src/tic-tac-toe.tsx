import React from "react";
import { Client } from "boardgame.io/react";
import { TicTacToe } from 'atom-games'
import { TicTacToeBoard } from "./TicTacToeBoard";
import { SocketIO } from "boardgame.io/multiplayer";

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: SocketIO(),
});

const TicTacToePage: React.FunctionComponent = () => {
  return <TicTacToeClient playerID="0"/>
}

export default TicTacToePage;
