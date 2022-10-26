import React from 'react'

const LineBoard = (props) => {

    const lineRender = () => {
        const htmlElement = []
        for (let j = 0; j < 3; j++) {
            htmlElement.push(props.renderSquare(props.row + j))
        }
        return htmlElement;
    }

    return (
        <React.Fragment >
            <div className="board-row">
                {lineRender()}
            </div>
        </React.Fragment>
    )
}

export default LineBoard