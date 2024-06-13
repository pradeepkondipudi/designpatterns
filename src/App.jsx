// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import DesignPattern from './components/designpattern';
import ObserverPattern from './components/observerpattern';
import StrategyPattern from './components/strategypattern';
import DecoratorPattern from './components/decoratorpattern';
import FactoryPattern from './components/factorypattern';
import TemplateMethodPattern from './components/templatemethodpattern';
import AdaptarPattern from './components/adaptarpattern';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/designpattern" element={<DesignPattern />} />
        <Route path="/observer" element={<ObserverPattern />} />
        <Route path="/strategy" element={<StrategyPattern />} />
        <Route path="/adaptar" element={<AdaptarPattern />} />
        <Route path="/decorator" element={<DecoratorPattern />} />
        <Route path="/factory" element={<FactoryPattern />} />
        <Route path="/templatemethod" element={<TemplateMethodPattern />} />
      </Routes>
    </Router>
  );
};

export default App;
