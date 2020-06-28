import React, { Component } from 'react';
import './App.css';
import Pad from './components/Pad';
import Display from './components/Display';
import Clear from './components/Clear';
import Delete from './components/Delete';
import Decimal from './components/Decimal';
import Sum from './operations/Sum';
import Minus from './operations/Minus';
import Multiply from './operations/Multiply';
import Division from './operations/Division';
import Equal from './operations/Equal';

class App extends Component {
    state = {
        store: 0,
        operation: 'plus',
        display: 0,
        currentVal: '',
        updateDisplay: true,
        clickedState: {
            clickedPlus: false,
            clickedMinus: false,
            clickedMultiply: false,
            clickedDivision: false,
        },
        maxLengthReached: false,
    };

    // ---------------------------------------------------------------
    // METHODS / OTHER CALCULATOR FUNCTION
    showNumbers = (e) => {
        if (this.state.updateDisplay) {
            this.setState({
                currentVal: e.target.innerText,
                display: e.target.innerText,
                updateDisplay: false,
                clickedState: {
                    ...this.state.clickedState,
                    clickedPlus: false,
                    clickedMinus: false,
                    clickedMultiply: false,
                    clickedDivision: false,
                },
            });
        } else {
            if (
                !(
                    this.state.currentVal.length === 1 &&
                    this.state.display[0] === '0'
                )
            ) {
                const number = this.state.currentVal + e.target.innerText;
                if (number.length > 12) {
                    this.setState({
                        display: 'MAX REACHED',
                        maxLengthReached: true,
                    });
                } else {
                    this.setState({ currentVal: number, display: number });
                }
            }
        }
    };

    clearState = () => {
        this.setState({
            display: 0,
            currentVal: '',
            operation: 'plus',
            store: 0,
            updateDisplay: true,
            clickedState: {
                clickedPlus: false,
                clickedMinus: false,
                clickedMultiply: false,
                clickedDivision: false,
            },
            maxLengthReached: false,
        });
    };

    deleteState = () => {
        this.setState({
            display: 0,
            currentVal: '',
            updateDisplay: true,
            maxLengthReached: false,
        });
    };

    decimalPoint = (e) => {
        if (this.state.currentVal !== '') {
            if (!this.state.currentVal.includes('.')) {
                this.setState({
                    display: this.state.display + e.target.innerText,
                    currentVal: this.state.display + e.target.innerText,
                });
            }
        }
    };

    // ---------------------------------------------------------------
    // OPERATIONS
    add = () => {
        if (!this.state.maxLengthReached) {
            if (this.state.currentVal === '' || this.state.currentVal === '-') {
                this.setState({
                    display: this.state.display,
                    currentVal: '',
                    operation: 'plus',
                    updateDisplay: true,
                    clickedState: {
                        ...this.state.clickedState,
                        clickedPlus: true,
                        clickedMinus: false,
                        clickedMultiply: false,
                        clickedDivision: false,
                    },
                });
            } else {
                this.equal();
                this.setState({
                    operation: 'plus',
                    updateDisplay: true,
                    clickedState: {
                        ...this.state.clickedState,
                        clickedPlus: true,
                    },
                });
            }
        }
    };

    subtract = () => {
        if (!this.state.maxLengthReached) {
            if (this.state.currentVal === '' || this.state.currentVal === '-') {
                this.setState({
                    display: '-',
                    currentVal: '-',
                    updateDisplay: false,
                    clickedState: {
                        ...this.state.clickedState,
                        clickedPlus: false,
                        clickedMinus: true,
                        clickedMultiply: false,
                        clickedDivision: false,
                    },
                });
            } else {
                this.equal();
                this.setState({
                    operation: 'minus',
                    updateDisplay: true,
                    clickedState: {
                        ...this.state.clickedState,
                        clickedMinus: true,
                    },
                });
            }
        }
    };

    multiply = () => {
        if (!this.state.maxLengthReached) {
            if (this.state.currentVal === '' || this.state.currentVal === '-') {
                this.setState({
                    display: this.state.display,
                    currentVal: '',
                    operation: 'multiply',
                    updateDisplay: true,
                    clickedState: {
                        ...this.state.clickedState,
                        clickedPlus: false,
                        clickedMinus: false,
                        clickedMultiply: true,
                        clickedDivision: false,
                    },
                });
            } else {
                this.equal();
                this.setState({
                    operation: 'multiply',
                    updateDisplay: true,
                    clickedState: {
                        ...this.state.clickedState,
                        clickedMultiply: true,
                    },
                });
            }
        }
    };

    divide = () => {
        if (!this.state.maxLengthReached) {
            if (this.state.currentVal === '' || this.state.currentVal === '-') {
                this.setState({
                    display: this.state.display,
                    currentVal: '',
                    operation: 'division',
                    updateDisplay: true,
                    clickedState: {
                        ...this.state.clickedState,
                        clickedPlus: false,
                        clickedMinus: false,
                        clickedMultiply: false,
                        clickedDivision: true,
                    },
                });
            } else {
                this.equal();
                this.setState({
                    operation: 'division',
                    updateDisplay: true,
                    clickedState: {
                        ...this.state.clickedState,
                        clickedDivision: true,
                    },
                });
            }
        }
    };

    // ---------------------------------------------------------------
    // RESULTS

    equal = () => {
        let {
            store,
            display,
            currentVal,
            operation,
            maxLengthReached,
        } = this.state;
        if (currentVal !== '' && !maxLengthReached) {
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

            if (String(store).length > 12 && String(store).includes('.')) {
                let matches = String(store).match(/\d+/g);
                let decimalPlaces = 12 - matches[0].length - 1;
                store =
                    Math.round(store * Math.pow(10, decimalPlaces)) /
                    Math.pow(10, decimalPlaces);
                this.setState({
                    store: store,
                    display: store,
                    currentVal: '',
                });
            } else if (String(store).length > 12) {
                this.setState({
                    display: 'MAX REACHED',
                    maxLengthReached: true,
                });
            } else {
                this.setState({
                    store: store,
                    display: store,
                    currentVal: '',
                });
            }
        }
    };

    // ---------------------------------------------------------------
    // RENDER
    render() {
        return (
            <div className='wrapper'>
                <h1 id='title'>
                    <i
                        className='fab fa-react'
                        style={{ fontSize: '30px' }}></i>{' '}
                    ReaC(t)alculator
                </h1>
                <div className='container' id='calculator'>
                    <Display display={this.state.display} />
                    <Clear clearState={this.clearState} />
                    <Delete deleteState={this.deleteState} />
                    <Division
                        divide={this.divide}
                        clicked={this.state.clickedState.clickedDivision}
                    />
                    <Multiply
                        multiply={this.multiply}
                        clicked={this.state.clickedState.clickedMultiply}
                    />
                    <Minus
                        subtract={this.subtract}
                        clicked={this.state.clickedState.clickedMinus}
                    />
                    <Sum
                        add={this.add}
                        clicked={this.state.clickedState.clickedPlus}
                    />
                    <Equal equal={this.equal} />
                    <Decimal decimal={this.decimalPoint} />
                    <Pad digits={this.showNumbers} />
                </div>
            </div>
        );
    }
}

export default App;
