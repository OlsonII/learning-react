import React from 'react';
import ReactDOM from 'react-dom';
import {LoginPage} from "./presentation/pages/login/login.page";
import {HomePage} from "./presentation/pages/home/home.page";

/*function Square(props: any){
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };
    }

    renderSquare(square: number) {
        return (
            <Square
            value={this.state.squares[square]}
            onClick={() => this.handleClick(square)}
        />);
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status: string;
        if (winner){
            status = 'Winner: ' + winner;
        }else{
            status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

    private handleClick(square: number) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[square]){
            return;
        }
        squares[square] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });

    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/!* status *!/}</div>
                    <ol>{/!* TODO *!/}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares: []){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}*/

// ========================================

ReactDOM.render(
    <HomePage />,
    document.getElementById('root')
);
