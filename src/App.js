import React, { Component } from 'react';
import './App.css';
import Pad from './components/Pad';
import Display from './components/Display';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operation: '',
            display: '',
        };
        this.showNumbers = this.showNumbers.bind(this);
    }

    showNumbers(e) {
        console.log(e.target.innerText);
        let number = this.state.display + e.target.innerText;
        this.setState({ display: number });
    }

    render() {
        return (
            <div className='container'>
                <Display display={this.state.display} />
                <Pad digits={this.showNumbers} />
            </div>
        );
    }
}

export default App;
