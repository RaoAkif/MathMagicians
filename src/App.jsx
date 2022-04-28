import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Quote from './routes/Quote';
import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './components/Calculator';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
