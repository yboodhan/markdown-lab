import React from 'react';

const RawInput = (props) => (
    <div id="rawInput" className="container">
        Raw Input
        <br />
        <textarea
            value={props.value}
            onChange={props.handleValueChange}
        />
    </div>
);

export default RawInput;