import React from 'react';

function Square(props) {
    return (
        <button
            className={ (props.winnerSquare) ? "square text-bold" : "square" }
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

export default Square;