import React from "react";
import "./tictactoe.css";
import { Cell } from "./cell";

interface State {
  turn: string;
  moves: any[];
  board: any[];
  noWinner: boolean;
  winner: any;
  currentMove: any[];
}

const keys = ["first", "second", "third", "fourth", "fifth", "sixth", "seven", "eight", "nine"];

export class TicTacToe extends React.Component<{}, State> {
  state: State = {
    turn: "x",
    moves: [Array(9).fill(null)],
    board: Array(9).fill(null),
    noWinner: true,
    winner: null,
    currentMove: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
  };

  checkWinner(board: any[], player: string) {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPositions.length; i++) {
      const [pos1, pos2, pos3] = winningPositions[i];
      if (board[pos1] === player && board[pos2] === player && board[pos3] === player) {
        console.log(`${player} is won!`); // Player has won
        this.setState(
          () => ({
            noWinner: false,
            winner: `${player} g'alaba qozondi!`,
          }),
          () => {
            console.log(this.state);
          }
        );
        return;
      }
    }

    if (!board.includes(null)) {
      console.log("Durrang");
      this.setState(
        (prev) => ({
          noWinner: false,
          winner: "Durrang bo'ldi!!!",
        }),
        () => {
          console.log(this.state);
        }
      );
    }
  }

  backToHistory = (move: any[]) => {
    this.setState({ currentMove: move }, () => {
      console.log(this.state.moves);
    });
  };

  handleClick = (event: any) => {
    if (this.state.currentMove === this.state.moves[this.state.moves.length - 1]) {
      console.log("true");
    }
    if (this.state.noWinner) {
      if (this.state.turn === "x") {
        if (event.target.textContent === "-" || event.target.textContent === "") {
          const newboard = [...this.state.board];
          newboard[event.target.cellIndex] = "x";
          this.setState(
            (prev) => ({
              turn: "o",
              moves: [...prev.moves, newboard],
              board: [...newboard],
              currentMove: newboard,
            }),
            () => {
              console.log(this.state.moves);
              console.log(this.state.board);
              this.checkWinner(this.state.board, "x");
            }
          );

          event.target.textContent = "x";
        } else {
          alert("Katakcha bosilgan!");
        }
      } else {
        if (event.target.textContent === "-" || event.target.textContent === "") {
          const newBoard = [...this.state.board];
          newBoard[event.target.cellIndex] = "o";
          this.setState(
            (prev) => ({
              turn: "x",
              moves: [...prev.moves, newBoard],
              board: [...newBoard],
              currentMove: newBoard,
            }),
            () => {
              console.log(this.state.board);
              this.checkWinner(this.state.board, "o");
            }
          );

          event.target.textContent = "o";
        } else {
          alert("Katakcha bosilgan!");
        }
      }
    } else {
      console.log("GAME OVER PLS RESTART GAME");
    }
  };

  render(): React.ReactNode {
    return (
      <div className="container">
        <div>
          <h1>Turn: {this.state.turn}</h1>
          <Cell onClick={this.handleClick} moves={this.state.currentMove} />
          {!this.state.noWinner && <h1>{this.state.winner}</h1>}
        </div>
        <div className="moves__container">
          {this.state.moves.map((move, index) =>
            index === 0 ? (
              <button onClick={() => this.backToHistory(move)} key={keys[index]}>
                Go to game start
              </button>
            ) : (
              <button onClick={() => this.backToHistory(move)} key={keys[index]}>
                Go to move #{index}
              </button>
            )
          )}
        </div>
      </div>
    );
  }
}
