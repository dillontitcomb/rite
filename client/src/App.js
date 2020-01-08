import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Editions from './components/editions/Editions';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AuthState from './context/auth/AuthState';
import UserState from './context/user/UserState';

const App = () => {
  return (
    <UserState>
      <AuthState>
        <Router>
          <div className="App">
            <Navbar title="Rite Editions" />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/editions" component={Editions}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/register" component={Register}></Route>
            </Switch>
            <Footer></Footer>
          </div>
        </Router>
      </AuthState>
    </UserState>
  );
};

export default App;
