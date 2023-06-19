import React from "react";
import "./App.css";
import { TicTacToe } from "./components/tictactoe";

export default class App extends React.Component {
  render(): React.ReactNode {
    return <TicTacToe />;
  }
}
