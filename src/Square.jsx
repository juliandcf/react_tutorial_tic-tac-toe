import React from 'react';

function Square(props) {
    return (
        <button key = {Math.random()}
            className={ (props.winnerSquare) ? "square text-bold" : "square" }
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

export default Square;