import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Calculator from './components/Calculator';
import operate from './logic/operate';

describe('App interaction', () => {
  it('renders the home page', () => {
    render(<App />);
    expect(document.body.textContent).toMatch(/Math Magicians/i);
  });

  it('contains the correct link', () => {
    render(<App />);
    const navLinkCalculator = document.querySelector('[href="/calculator"]');
    expect(navLinkCalculator.innerHTML).toMatch(/Calculator/i);
  });

  it('displays the right key pn the screen when clicked', () => {
    render(<Calculator />);
    const key1 = screen.getByText('1');
    const display = document.querySelector('.calculator-screen');
    expect(key1.value).toBe('1');
    fireEvent.click(key1);
    expect(display.innerHTML).toBe('1');
  });

  it('Simulate User interaction on the keyboard', () => {
    render(<Calculator />);
    const key5 = screen.getByText('5');
    const key7 = screen.getByText('7');
    const keyPlus = screen.getByText('+');
    const keyEqual = screen.getByText('=');
    const display = document.querySelector('.calculator-screen');
    expect(key5.value).toBe('5');
    expect(key7.value).toBe('7');
    expect(keyPlus.value).toBe('+');
    expect(operate(key5.value, key7.value, keyPlus.value)).toBe('12');
    fireEvent.click(key5);
    fireEvent.click(keyPlus);
    fireEvent.click(key7);
    fireEvent.click(keyEqual);
    expect(display.innerHTML).toBe('12');
  });
});
