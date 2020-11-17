import React from 'react';
import NavBar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Portfolio from './components/Portfolio.js';
import Education from './components/Education.js';
import About from './components/About.js';
import EggOne from './components/EggOne.js';
import Home from './components/Home.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">

      <Switch>
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/education' component={Education} />
        <Route path='/about' component={About} />
        <Route path='/eggone' component={EggOne} />
        <Route path='/' component={Home} />
      </Switch>

      
    </div>
    </Router>
  );
}

export default App;
