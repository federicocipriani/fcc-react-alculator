import React, { Component } from 'react';
import './App.css';
import Pad from './components/Pad';
import Display from './components/Display';
import Clear from './components/Clear';
import Sum from './operations/Sum';
import Minus from './operations/Minus';
import Multiply from './operations/Multiply';
import Division from './operations/Division';
import Equal from './operations/Equal';

class App extends Component {
    state = {
        store: '',
        operation: '',
        display: '',
    };

    showNumbers = (e) => {
        console.log(e.target.innerText);
        let number = this.state.display + e.target.innerText;
        this.setState({ display: number });
    };

    clearState = () => {
        this.setState({ display: '' });
    };

    sum = () => {
        this.setState({ store: this.state.display });
        this.setState({ display: '' });
    };

    equal = () => {
        let total = +this.state.store + +this.state.display;
        this.setState({ store: total });
        this.setState({ display: total });
    };

    render() {
        return (
            <div className='container'>
                <Display display={this.state.display} />
                <Clear clearState={this.clearState} />
                <Sum sum={this.sum} />
                <Minus />
                <Multiply />
                <Division />
                <Equal equal={this.equal} />
                <Pad digits={this.showNumbers} />
            </div>
        );
    }
}

export default App;
