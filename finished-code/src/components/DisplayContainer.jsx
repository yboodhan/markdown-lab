import React, { Component } from 'react';
import marked from 'marked';
import RawInput from './RawInput'

class DisplayContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Some markdown text.'
        };

        this.handleValueChange = this.handleValueChange.bind(this);
        this.convertMarkdown = this.convertMarkdown.bind(this);
    }

    handleValueChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    convertMarkdown() {
        var rawMarkup = marked(this.state.value, { sanitize: true });
        return { __html: rawMarkup };
    }

    render() {
        return (
            <div id='DisplayContainer'>
                Display Container
                <div id='preview' dangerouslySetInnerHTML={this.convertMarkdown()}></div>
                <RawInput value={this.state.value} handleValueChange={this.handleValueChange} />
            </div>
        );
    }
}

export default DisplayContainer;