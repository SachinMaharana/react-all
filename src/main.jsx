console.log('Heee Hawww');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Counter />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
