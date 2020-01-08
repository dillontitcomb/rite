import React, { useState } from 'react';

const Login = () => {
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
  };

  return (
    <div>
      <div className="container">
        <p className="x-large my-2">Login</p>
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
