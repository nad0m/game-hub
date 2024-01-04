import './App.css';
import { TicTacToe } from 'atom-games';
import { Lobby } from 'boardgame.io/react';
import { TicTacToeBoard } from './TicTacToeBoard';

function App() {
  return (
    <Lobby
      gameServer={`http://${window.location.hostname}:8000`}
      lobbyServer={`http://${window.location.hostname}:8000`}
      gameComponents={[{ game: TicTacToe, board: TicTacToeBoard }]}
    />
  );
}

export default App;
