import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Login = () => {
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated } = authContext;

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state.email, state.password);
    login(state.email, state.password);
  };

  // Redirect if already logged in
  if (isAuthenticated) {
    return <Redirect to="/editions"></Redirect>;
  }

  return (
    <div>
      <div className="container">
        <p className="x-large my-3 text-center text-weight-light">LOGIN</p>
        <p className="lead">Log into your RITE Editions member account.</p>
        <div className="my-1">
          <form className="form" onSubmit={onSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={onChange}
            />

            <input
              type="text"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={onChange}
            />
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
