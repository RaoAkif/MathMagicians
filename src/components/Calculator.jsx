import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

import { buttonsArray } from '../logic/buttonsArray';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <input type="text" className="calculator-screen" value="0" disabled />
        <div className="calculator-keys">
          {Object.entries(buttonsArray).map(([i, { symbol, value, className }]) => (
            <button handleClick={this.handleClick} key={i} type="button" className={className} value={value} > {symbol} </button>
          ))}
        </div>
      </div>
    );
  }
}
