import { useState } from 'react';
import '../styles.css';
import Square from './Square.jsx';

export default function Board() {

    const [turn, setTurn] = useState(true);
    const [record, setRecord] = useState([Array(9).fill(null)]);
    const squares = record[record.length - 1];

    function resetGame(){
        let newRecord = record.slice(0,1);
        setRecord(newRecord);
    }

    function handleClick(i){
        if(calculateWinner(squares) || squares[i])return;
        let newSquares = squares.slice();
        newSquares[i] = (turn?'X':'O');
        setTurn(!turn);
        setRecord([...record, newSquares]);
    }
    let winner = calculateWinner(squares);
    let status;
    status = winner? ('Winner: ' + winner) : ('Next Player: ' + (turn?'X':'O'));
    return (
        <>
            <div className='status'>{status}</div>

            <div className='board'>
                <Square value = {squares[0]} setValue={() => handleClick(0)}/>
                <Square value = {squares[1]} setValue={() => handleClick(1)}/>
                <Square value = {squares[2]} setValue={() => handleClick(2)}/>
                <Square value = {squares[3]} setValue={() => handleClick(3)}/>
                <Square value = {squares[4]} setValue={() => handleClick(4)}/> 
                <Square value = {squares[5]} setValue={() => handleClick(5)}/>
                <Square value = {squares[6]} setValue={() => handleClick(6)}/>
                <Square value = {squares[7]} setValue={() => handleClick(7)}/>
                <Square value = {squares[8]} setValue={() => handleClick(8)}/>
            </div>
            <button onClick={resetGame}>Reset Game</button>
        </>
    );  
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
}