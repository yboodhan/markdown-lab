import React, { useState, useEffect } from 'react';
import RawInput from './RawInput'; // child

// import marked package (google: npm marked) -- takes markdown --> html!
import marked from 'marked';

const DisplayContainer = props => {
    // this is the state that changes based on user input (given in markdown!)
    let [markdown, setMarkdown] = useState('')
    let [htmlObject, setHtmlObject] = useState({ __html: '<p></p>'})

    useEffect( () => {
        // converting a markdown string into an html string
        // uses marked function (comes from marked on line 4)
        let htmlFromMarkdown = marked(markdown);
        // store an html string in an object with the key '__html' (required!)
        setHtmlObject({ __html: htmlFromMarkdown })
    }, [markdown])


    // function to pass to raw input to trigger state update
    let handleUserInput = (value) => {
        // change the value of markdown in state
        // trigger the useEffect hook on line 12
        setMarkdown(value)
    }

    return (
        <div id='DisplayContainer'>
            <RawInput handleUserInput={handleUserInput}/>
            <h1>HTML:</h1>
            <div id="preview" dangerouslySetInnerHTML={htmlObject}></div>
        </div>
    );
}

export default DisplayContainer;