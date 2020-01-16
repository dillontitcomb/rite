import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Editions from './components/editions/Editions';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Admin from './components/pages/Admin';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AuthContext from './context/auth/authContext';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar title="Rite Editions" />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/editions" component={Editions}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/admin" component={Admin}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
