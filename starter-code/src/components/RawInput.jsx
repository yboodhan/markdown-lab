import React from 'react';

const RawInput = props => {

    // handleSubmit is the same as the function handleUserInput that we got from the parent compnent
    // passed down from displaycontainer to rawinput
    let handleSubmit = props.handleUserInput

    return (
        <div id="rawInput" className="container">
            <h1>Markdown:</h1>
            <textarea onChange={(e) => handleSubmit(e.target.value)}/>
        </div>
    )
}

export default RawInput;