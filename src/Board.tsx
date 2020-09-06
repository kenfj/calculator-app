import React from 'react';
import './App.css';


interface BoardProps {
  onClick: (x: string) => void,
}

class Board extends React.Component<BoardProps> {
  private renderSquare(x: string, className: string = '') {
    return (
      <button className={'square ' + className} onClick={() => this.props.onClick(x)}>
        {x}
      </button>
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare("C")}
          {this.renderSquare("(")}
          {this.renderSquare(")")}
          {this.renderSquare("/", 'symbol')}
        </div>
        <div className="board-row">
          {this.renderSquare("7")}
          {this.renderSquare("8")}
          {this.renderSquare("9")}
          {this.renderSquare("*", 'symbol')}
        </div>
        <div className="board-row">
          {this.renderSquare("4")}
          {this.renderSquare("5")}
          {this.renderSquare("6")}
          {this.renderSquare("-", 'symbol')}
        </div>
        <div className="board-row">
          {this.renderSquare("1")}
          {this.renderSquare("2")}
          {this.renderSquare("3")}
          {this.renderSquare("+", 'symbol')}
        </div>
        <div className="board-row">
          {this.renderSquare("0", "square2")}
          {this.renderSquare(".")}
          {this.renderSquare("=", 'symbol')}
        </div>
      </div>
    );
  }
}

export default Board;
