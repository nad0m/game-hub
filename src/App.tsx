import './App.css';
import { TicTacToe } from 'atom-games';
import { Lobby } from 'boardgame.io/react';
import { TicTacToeBoard } from './TicTacToeBoard';

function App() {
  console.log(import.meta.env.VITE_ATOM_SOCKET_API);
  return (
    <Lobby
      gameServer={import.meta.env.VITE_ATOM_SOCKET_API}
      lobbyServer={import.meta.env.VITE_ATOM_SOCKET_API}
      gameComponents={[{ game: TicTacToe, board: TicTacToeBoard }]}
    />
  );
}

export default App;
