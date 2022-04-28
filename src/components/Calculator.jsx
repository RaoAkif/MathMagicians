import React, { useState, useCallback } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import buttonsArray from './buttonsArray';

function Calculator() {
  const [state, setState] = useState({});

  const handleButtonClick = useCallback((event) => {
    setState((prev) => {
      const output = calculate(prev, event.target.value);
      return ({
        ...prev,
        ...output,
      });
    });
  }, []);

  const { total, next, operation } = state;
  const display = (total || '') + (operation || '') + (next || '');

  return (
    <div>
      <h2 style={{ paddingTop: '60px', fontSize: '20px', paddingLeft: '20px' }}>Lets do some Math !!!</h2>
      <div className="calculator">
        <p className="calculator-screen">{display || '0'}</p>
        <div className="calculator-keys">
          {Object.entries(buttonsArray).map(([i, { symbol, value, className }]) => (
            <button onClick={handleButtonClick} key={i} type="button" className={className} value={value}>
              {symbol}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
