import React, { useMemo } from 'react';
import { BoardProps } from "boardgame.io/react";

const range = (max: number, min: number = 0): number[] => [...Array(max -min)].map((_, i) => i + min);

export const TicTacToeBoard: React.FunctionComponent<BoardProps> = (props) => {
  const winner = useMemo(() => {
    if (props.ctx.gameover) {
      return props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {props.ctx.gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }
  }, [props.ctx.gameover]);

  return (
    <div>
      <table id="board">
        <tbody>
        {range(3).map((i) => (
          <tr key={i}>{range(3).map((j) => {
            const id = i * 3 + j;
            return <td key={j} style={{
              border: '1px solid #555',
              width: '50px',
              height: '50px',
              lineHeight: '50px',
              textAlign: 'center',
            }} onClick={() => props.moves.clickCell(id)}>{(props.G.cells)[id]}</td>;
          })}</tr>
        ))}
        </tbody>
      </table>
      {winner}
    </div>
  );
}
