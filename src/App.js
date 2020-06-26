import React, { Component } from 'react';
import './App.css';
import Pad from './components/Pad';
import Display from './components/Display';
import Clear from './components/Clear';
import Decimal from './components/Decimal';
import Sum from './operations/Sum';
import Minus from './operations/Minus';
import Multiply from './operations/Multiply';
import Division from './operations/Division';
import Equal from './operations/Equal';

class App extends Component {
    state = {
        store: 0,
        total: 0,
        operation: 'plus',
        display: 0,
        currentVal: 0,
        updateDisplay: true,
    };

    showNumbers = (e) => {
        if (this.state.updateDisplay) {
            console.log('Value entered = ' + e.target.innerText);
            this.setState({
                currentVal: e.target.innerText,
                display: e.target.innerText,
                updateDisplay: false,
            });
        } else {
            if (
                !(
                    this.state.display.length === 1 &&
                    this.state.display[0] === '0'
                )
            ) {
                console.log('Value entered = ' + e.target.innerText);
                let number = this.state.display + e.target.innerText;
                this.setState({ currentVal: number, display: number });
            }
        }
    };

    clearState = () => {
        this.setState({
            display: 0,
            currentVal: 0,
            operation: 'plus',
            total: 0,
            store: 0,
            updateDisplay: true,
        });
    };

    decimalPoint = (e) => {
        console.log(e.target.innerText);
        console.log(this.state.display[this.state.display.length - 1] !== '.');
        if (this.state.display !== '') {
            if (!this.state.display.includes('.')) {
                this.setState({
                    display: this.state.display + e.target.innerText,
                });
            }
        }
    };

    // ---------------------------------------------------------------
    // OPERATIONS
    add = () => {
        // this.setState({ store: +this.state.store + +this.state.display });

        // this.partialTotal(this.state);
        this.equal();
        this.setState({ operation: 'plus', updateDisplay: true });
        console.log(this.state.operation);

        // this.setState({
        //     // store: this.state.display,
        //     // store: +this.state.store + +this.state.display,
        //     // display: +this.state.store + +this.state.display,
        //     // operation: 'plus',
        //     updateDisplay: true,
        // });
    };
    subtract = () => {
        this.equal();
        this.setState({ operation: 'minus', updateDisplay: true });
        console.log(this.state.operation);
        // this.setState({
        //     // store: this.state.display,
        //     store: +this.state.store - +this.state.display,
        //     display: +this.state.store - +this.state.display,
        //     operation: 'minus',
        //     updateDisplay: true,
        // });
    };
    multiply = () => {
        this.equal();
        this.setState({ operation: 'multiply', updateDisplay: true });
        // this.setState({
        //     store: this.state.display,
        //     // store: +this.state.store * +this.state.display,
        //     // display: +this.state.store * +this.state.display,
        //     operation: 'multiply',
        //     updateDisplay: true,
        // });
    };
    divide = () => {
        this.equal();
        this.setState({ operation: 'division', updateDisplay: true });
        // this.setState({
        //     store: this.state.display,
        //     // store: +this.state.store / +this.state.display,
        //     // display: +this.state.store / +this.state.display,
        //     operation: 'division',
        //     updateDisplay: true,
        // });
    };

    // ---------------------------------------------------------------
    // RESULTS

    equal = () => {
        let { store, display, currentVal, total, operation } = this.state;
        console.log(`CurrentVal before calc = ${currentVal}`);
        console.log(`Display before calc = ${display}`);
        console.log(`Store before calc = ${store}`);
        console.log(`Operation type = ${operation}`);
        switch (operation) {
            case 'plus':
                store = +store + +currentVal;
                break;
            case 'minus':
                store = +store - +currentVal;
                break;
            case 'multiply':
                store = +store * +currentVal;
                break;
            case 'division':
                store = +store / +currentVal;
                break;
            default:
                break;
        }
        console.log(`Store post calc = ${store}`);
        this.setState({
            total: 0,
            store: store,
            display: store,
            currentVal: 0,
        });
    };

    // ---------------------------------------------------------------
    // RENDER
    render() {
        return (
            <div className='container'>
                <Display display={this.state.display} />
                <Clear clearState={this.clearState} />
                <Sum add={this.add} />
                <Minus subtract={this.subtract} />
                <Multiply multiply={this.multiply} />
                <Division divide={this.divide} />
                <Equal equal={this.equal} />
                <Decimal decimal={this.decimalPoint} />
                <Pad digits={this.showNumbers} />
            </div>
        );
    }
}

export default App;
