import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        let newCount = this.state.count + 1;
        this.setState({count: newCount})
    }

    render() {
        return (
            <div>
                <h1>HIIII</h1>
                <button onClick={this.clickHandler}>Count: {this.state.count}</button>
            </div>
        )
    }
}

export default Counter;
