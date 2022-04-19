import React, { Component } from 'react';
import './Calculator.css';
import Result from './Result';

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator-container">
        <Result />

      </div>
    );
  }
}
