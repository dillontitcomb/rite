import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar title="Rite Editions" />
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
