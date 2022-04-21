import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import buttonsArray from './buttonsArray';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleButtonClick = (event) => {
    this.setState((prevState) => calculate(prevState, event.target.value));
  };

  formatOutput = () => {
    const { total, next, operation } = this.state;
    const display = (total || '') + (operation || '') + (next || '');

    return display || '0';
  };

  render() {
    return (
      <div className="calculator">
        <p className="calculator-screen">{this.formatOutput()}</p>
        <div className="calculator-keys">
          {Object.entries(buttonsArray).map(([i, { symbol, value, className }]) => (
            <button onClick={this.handleButtonClick} key={i} type="button" className={className} value={value}>
              {symbol}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
