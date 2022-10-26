import React from 'react';
import LineBoard from './LineBoard';
import Square from './Square';

const Board = (props) => {
    const renderSquare = (i) => {
        let winnerSquare;
        if (props.winner)
            winnerSquare = props.winner.some((e) => e === i)

        return <Square
        key = {i}
            value={props.squares[i]}
            winnerSquare={winnerSquare}
            onClick={() => props.onClick(i)}
        />;
    }

    const boardRender = () => {
        const htmlElement = []
        for (let i = 0; i < 9; (i = i + 3)) {
            htmlElement.push(<LineBoard  key = {i} row={i} renderSquare={renderSquare} />)

        }
        return htmlElement;

    }

    return (
        <div>
            {boardRender()}
        </div>
    );

}

export default Board;