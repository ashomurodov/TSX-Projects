import React from "react";
import { Board, Histories } from "./components";

type Player = "X" | "O";
type iBoard = (Player | null)[];
export interface AppState {
  board: iBoard;
  histories: iBoard[];
  nextPlayer: Player;
  winner?: Player;
  currentIdx: number;
}

const players: Record<Player, Player> = {
  X: "O",
  O: "X",
};

export default class App extends React.Component<{}, AppState> {
  // Main state
  state: AppState = {
    board: new Array(9).fill(null),
    histories: [new Array(9).fill(null)],
    nextPlayer: "X",
    currentIdx: 0,
    // winner: "X",
  };

  handleCell = (idx: number) => {
    const board = [...this.state.board];
    let { nextPlayer, histories, currentIdx } = this.state;

    if (board[idx]) return;

    board[idx] = nextPlayer;

    this.setState({
      board,
      currentIdx: currentIdx + 1,
      nextPlayer: players[nextPlayer],
      histories: [...histories, board],
    });
  };

  handleHistory = (idx: number) => {
    const { histories } = this.state;
    const board = [...histories[idx]];

    this.setState({ board, currentIdx: idx });
  };

  // Rendering...
  render(): React.ReactNode {
    const { board, nextPlayer, histories, currentIdx, winner } = this.state;
    return (
      <main className="container d-flex mt-5" style={{ gap: "20px" }}>
        <Board board={board} onCell={this.handleCell} />
        <Histories
          onHistory={this.handleHistory}
          winner={winner}
          currentIdx={currentIdx}
          nextPlayer={nextPlayer}
          histories={histories}
        />
      </main>
    );
  }
}
