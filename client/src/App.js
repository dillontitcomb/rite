import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './components/admin/Admin';
import Artists from './components/artists/Artists';
import Edition from './components/editions/Edition';
import Editions from './components/editions/Editions';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import News from './components/news/News';
import NewsPost from './components/news/NewsPost';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ArtistState from './context/artist/ArtistState';
import AuthContext from './context/auth/authContext';
import EditionState from './context/edition/EditionState';
import NewsPostState from './context/newsPost/NewsPostState';
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
    <EditionState>
      <ArtistState>
        <NewsPostState>
          <Router>
            <div className="App">
              <Navbar title="Rite Editions" />
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/editions" component={Editions}></Route>
                <Route exact path="/artists" component={Artists}></Route>
                <Route exact path="/news" component={News}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/admin" component={Admin}></Route>
                <Route exact path="/editions/:id" component={Edition}></Route>
                <Route exact path="/newsPosts/:id" component={NewsPost}></Route>
              </Switch>
              <Footer></Footer>
            </div>
          </Router>
        </NewsPostState>
      </ArtistState>
    </EditionState>
  );
};

export default App;
