import React from "react";
import "./cell.css";

interface BoxProps {
  onClick: any;
  moves: any;
}

export class Cell extends React.Component<BoxProps> {
  render(): React.ReactNode {
    return (
      <table>
        <tbody>
          <tr>
            <td onClick={this.props.onClick}>{this.props.moves[0]}</td>
            <td onClick={this.props.onClick}>{this.props.moves[1]}</td>
            <td onClick={this.props.onClick}>{this.props.moves[2]}</td>
            <td onClick={this.props.onClick}>{this.props.moves[3]}</td>
            <td onClick={this.props.onClick}>{this.props.moves[4]}</td>
            <td onClick={this.props.onClick}>{this.props.moves[5]}</td>
            <td onClick={this.props.onClick}>{this.props.moves[6]}</td>
            <td onClick={this.props.onClick}>{this.props.moves[7]}</td>
            <td onClick={this.props.onClick}>{this.props.moves[8]}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
