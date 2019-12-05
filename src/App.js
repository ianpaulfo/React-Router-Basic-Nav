import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

import { Route, Link } from "react-router-dom"

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" Component={Home}/>
    <Route path="/about" Component={About}/>
    <Route path="/contact" Component={Contact}/>
  </div>
);

export default App;
